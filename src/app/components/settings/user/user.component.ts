import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from 'src/app/models/user_model';
import { AuthService } from 'src/app/services/auth.service';
declare var $:any
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {
  role:any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  searchT:any;
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl('')
  });
  submitted:boolean = false;
  hiddenId:any = '';
  dataList: UserModel[] = [];
  model = new UserModel();
  constructor(private service: AuthService,private fb: FormBuilder, private toastr:ToastrService){
  }
  ngOnInit() : void{
      this.form = this.fb.group({
        username: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', [Validators.required,
        Validators.email]],
        password: ['', Validators.required],
        role: ['', Validators.required]
      }),
      this.getData();
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
 //use toastr
 successToastr(){
  this.toastr.success('ສໍາເລັດແລ້ວ!', 'Success',{
      closeButton: true
  });
}
warningToastr(){
  this.toastr.warning('ຂໍອະໄພເກີດມີຂໍ້ຜິດຜາດບາງຢ່າງ!', 'Warning',{
      closeButton: true
  });
}
errorToastr(){
  this.toastr.error('ຂໍອະໄພມີບັນຫາກະລຸນາລອງອີກຄັ້ງ!', 'Error',{
      closeButton: true
  });
}
  //resetField()
  resetField(){
     this.model.username = "";
     this.model.email = "";
     this.model.phone = "";
     this.role = "";
  }
  //get data 
  getData(){
    this.service
    .getUsers()
    .subscribe((res: UserModel[]) => this.dataList = res);
  }
  //make pagination
  pageChangeEvent(event: number){
    this.page = event;
    this.getData();
  }
  createData(model: UserModel) : void {
    this.submitted = true;
   if (this.form.invalid) {
     return;
   }
   this.model.username = model.username;
   this.model.email =  model.email;
   this.model.password = model.password,
   this.model.role = this.role;
   this.service
     .Create(model)
     .subscribe((res: UserModel[]) => 
       {
         this.ngOnInit();
         this.resetField();
         this.successToastr();
       },
       (error) => {
           this.warningToastr();
       }
     );
 }
//delete
deleteData() {
 this.service
   .Delete(this.hiddenId)
   .subscribe((res) => {
     this.ngOnInit();
     this.resetField();
     this.closedeleteModal();
     this.successToastr();
   }, (error) => {
     this.warningToastr();
   });
}
//update
updateData(model: UserModel) {
  this.submitted = true;
   if (this.form.invalid) {
     return;
   }
   model.id = this.model.id;
   model.username = this.model.username;
   model.email = this.model.email;
   model.password = this.model.password;
   model.role = this.role;
   this.service
   .Update(Number(this.model.id),model)
   .subscribe((res) => {
     this.resetField();
     this.ngOnInit();
     this.closeeditModal();
     this.successToastr();
   },(error) => {
       this.warningToastr();
   }
   );
}
//create modal
opencreateModal(){
  $('#modal-add').modal('show');
 }
 closecreateModal(){
   $('#modal-add').modal('hide');
 }
 //edit modal
 openeditModal(data : UserModel){
  this.model.id = data.id;
  this.model.username = data.username;
  this.model.email = data.email;
  this.model.phone = data.phone;
   $('#modal-edit').modal('show');
  }
  closeeditModal(){
    $('#modal-edit').modal('hide');
  }
  //delete modal
  opendeleteModal(data : UserModel){
    this.model.id = data.id;
    this.model.username = data.username;
    this.model.email = data.email;
    this.model.phone = data.phone;
   $('#modal-delete').modal('show');
  }
  closedeleteModal(){
    $('#modal-delete').modal('hide');
  }
}
