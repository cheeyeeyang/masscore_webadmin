import { Component } from '@angular/core';
import { AbstractControl, FormBuilder,Validators, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TheoryModel } from 'src/app/models/theory_model';
import { TheoryService } from 'src/app/services/theory.service';
declare var $:any;
@Component({
  selector: 'app-theory',
  templateUrl: './theory.component.html',
  styleUrls: ['./theory.component.sass']
})
export class TheoryComponent {
  loading =  true;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  searchT:any;
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    actvie: new FormControl('')
  });
  submitted:boolean = false;
  hiddenId:any = '';
  dataList: TheoryModel[] = [];
  model = new TheoryModel();
  constructor(private service: TheoryService,private fb: FormBuilder, private toastr:ToastrService){
  }
  ngOnInit() : void{
      this.form = this.fb.group({
        name: ['', Validators.required],
        active: ['', Validators.required]
      }),
      this.model.active=true;
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
     this.hiddenId = "";
     this.model.name = "";
     this.model.active = true;
  }
  //get data 
  getData(){
    this.service.Select().subscribe((res: TheoryModel[]) => {
      this.dataList = res;
      this.loading = false;
    });
  }
  //make pagination
  pageChangeEvent(event: number){
    this.page = event;
    this.getData();
  }
  createData(model: TheoryModel) : void {
     this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.model.name = model.name;
    this.model.active =  model.active;
    this.service.Create(model).subscribe((res: TheoryModel[]) => 
        {
          this.dataList = res;
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
    .subscribe((res: TheoryModel[]) => {
      this.dataList = res;
      this.resetField();
      this.closedeleteModal();
      this.successToastr();
    }, (error) => {
      this.warningToastr();
    });
}
//show edit
editData(data: TheoryModel) {
  this.hiddenId = 'edit';
  this.model.id = data.id;
  this.model.name = data.name;
  this.model.active = data.active;
}
//update
updateData(model: TheoryModel) {
   this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    model.id = this.model.id;
    model.name = this.model.name;
    model.active = this.model.active;
    this.service.Update(Number(this.model.id),model).subscribe((res: TheoryModel[]) => {
      this.dataList = res;
      this.resetField();
      this.successToastr();
    },(error) => {
        this.warningToastr();
    }
    );
}
  //delete modal
  opendeleteModal(data: TheoryModel){
    this.hiddenId = data.id;
    this.model.name = data.name;
   $('#modal-delete').modal('show');
  }
  closedeleteModal(){
    $('#modal-delete').modal('hide');
  }
}
