import { Component } from '@angular/core';
import { AbstractControl, FormBuilder,Validators, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GovermentPositionModel } from 'src/app/models/govermentposition_model';
import { GovermentpositionService } from 'src/app/services/govermentposition.service';
declare var $:any;
@Component({
  selector: 'app-govermentposition',
  templateUrl: './govermentposition.component.html',
  styleUrls: ['./govermentposition.component.sass']
})
export class GovermentpositionComponent {
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
  dataList: GovermentPositionModel[] = [];
  model = new GovermentPositionModel();
  constructor(private service: GovermentpositionService,private fb: FormBuilder, private toastr:ToastrService){
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
     this.model.id = 0;
     this.hiddenId = "";
     this.model.name = "";
  }
  //get data 
  getData(){
    this.service
    .Select()
    .subscribe((res: GovermentPositionModel[]) => this.dataList = res);
  }
  //make pagination
  pageChangeEvent(event: number){
    this.page = event;
    this.getData();
  }
  createData(model: GovermentPositionModel) : void {
     this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.model.name = model.name;
    this.model.active =  model.active;
    this.service
      .Create(model)
      .subscribe((res: GovermentPositionModel[]) => 
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
//show edit
editData(data: GovermentPositionModel) {
  this.hiddenId = 'edit';
  this.model.id = data.id;
  this.model.name = data.name;
  this.model.active = data.active;
}
//update
updateData(model: GovermentPositionModel) {
   this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    model.id = this.model.id;
    model.name = this.model.name;
    model.active = this.model.active;
    this.service
    .Update(Number(this.model.id),model)
    .subscribe((res) => {
      this.resetField();
      this.ngOnInit();
      this.successToastr();
    },(error) => {
        this.warningToastr();
    }
    );
}
  //delete modal
  opendeleteModal(data: GovermentPositionModel){
    this.hiddenId = data.id;
    this.model.name = data.name;
   $('#modal-delete').modal('show');
  }
  closedeleteModal(){
    $('#modal-delete').modal('hide');
  }
}
