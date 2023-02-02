import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PartyPositionModel } from 'src/app/models/party_position_model';
import { PartypositionService } from 'src/app/services/partyposition.service';
import { Hepler } from '../../helper/hepler';
declare var $ : any;
@Component({
  selector: 'app-partyposition',
  templateUrl: './partyposition.component.html',
  styleUrls: ['./partyposition.component.sass']
})
export class PartypositionComponent {
  loading = true;
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
  dataList: PartyPositionModel[] = [];
  model = new PartyPositionModel();
  helper =  new Hepler();
  constructor(private service: PartypositionService,private fb: FormBuilder, private toastr:ToastrService){
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
  this.toastr.success(this.helper.success, 'Success',{
      closeButton: true
  });
}
warningToastr(w:any){
  this.toastr.warning(w, 'Warning',{
      closeButton: true
  });
}
errorToastr(e:any){
  this.toastr.error(this.helper.error, 'Error',{
      closeButton: true
  });
}
  //resetField()
 resetField(){
  this.model.id  = 0;
  this.hiddenId = "";
  this.model.name = "";
  this.model.active = true;
}
  //get data 
  getData(){
    this.service.Select().subscribe((res: PartyPositionModel[]) => {
      this.dataList = res;
      this.loading = false;
    });
  }
  //make pagination
  pageChangeEvent(event: number){
    this.page = event;
    this.getData();
  }
  createData(model: PartyPositionModel) : void {
    this.submitted = true;
   if (this.form.invalid) {
     return;
   }
   var data  = {
        "name" : model.name,
        "active" : model.active
   };
   this.service.Create(data)
     .subscribe((res: PartyPositionModel[]) => 
       {
         this.dataList =res;
         this.resetField();
         this.successToastr();
       },
       (error) => {
         this.warningToastr(this.helper.warning);
       }
     );
 }
 //delete
 deleteData() {
  this.service.Delete(this.model.id).subscribe((res: PartyPositionModel[]) => {
    this.dataList = res;
    this.resetField();
    this.closedeleteModal();
    this.successToastr();
  }, (error) => {
    this.warningToastr(this.helper.not_allow_delete);
  });
}
//show edit
editData(data: PartyPositionModel) {
  this.hiddenId = 'edit';
  this.model.id = data.id;
  this.model.name = data.name;
  this.model.active = data.active;
}
//update
updateData(model: PartyPositionModel) {
   this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    model.id = this.model.id;
    model.name = this.model.name;
    model.active = this.model.active;
    this.service
    .Update(this.model.id,model)
    .subscribe((res : PartyPositionModel[]) => {
      this.dataList = res;
      this.resetField();
      this.successToastr();
    },(error) => {
        this.warningToastr(this.helper.warning);
    }
    );
}
  //delete modal
  opendeleteModal(data: PartyPositionModel){
    this.model.id = data.id;
    this.model.name = data.name;
   $('#modal-delete').modal('show');
  }
  closedeleteModal(){
    $('#modal-delete').modal('hide');
  }
}
