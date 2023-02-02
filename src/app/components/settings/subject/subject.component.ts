import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SubjectModel } from 'src/app/models/subject_model';
import { SubjectService } from 'src/app/services/subject.service';
import { FormGroup, FormControl, AbstractControl, Validators, FormBuilder  } from '@angular/forms';
import { Hepler } from '../../helper/hepler';
declare var $:any;
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.sass']
})
export class SubjectComponent {
  loading = true;
  page: number = 1;
  count: number = 0;
  searchT:any;
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    actvie: new FormControl('')
  });
  submitted:boolean = false;
  hiddenId:any = '';
  dataList: SubjectModel[] = [];
  model = new SubjectModel();
  helper = new Hepler;
  constructor(private service: SubjectService,private fb: FormBuilder, private toastr:ToastrService){
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
    this.service.Select().subscribe((res: SubjectModel[]) => {
      this.dataList = res;
      this.loading = false;
    });
  }
  //make pagination
  pageChangeEvent(event: number){
    this.page = event;
    this.getData();
  }
  createData(model: SubjectModel) : void {
     this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.model.name = model.name;
    this.model.active =  model.active;
    this.service
      .Create(model)
      .subscribe((res: SubjectModel[]) => 
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
  this.service.Delete(this.model.id).subscribe((res: SubjectModel[]) => {
      this.dataList = res;
      this.resetField();
      this.closedeleteModal();
      this.successToastr();
    }, (error) => {
      this.warningToastr(this.helper.not_allow_delete);
    });
}
//show edit
editData(data: SubjectModel) {
  this.hiddenId = 'edit';
  this.model.id = data.id;
  this.model.name = data.name;
  this.model.active = data.active;
}
//update
updateData(model: SubjectModel) {
   this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    model.id = this.model.id;
    model.name = this.model.name;
    model.active = this.model.active;
    this.service
    .Update(Number(this.model.id),model)
    .subscribe((res: SubjectModel[]) => {
      this.dataList = res;
      this.resetField();
      this.successToastr();
    },(error) => {
        this.warningToastr(this.helper.warning);
    }
    );
}
  //delete modal
  opendeleteModal(data: SubjectModel){
    this.model.id = data.id;
    this.model.name = data.name;
   $('#modal-delete').modal('show');
  }
  closedeleteModal(){
    $('#modal-delete').modal('hide');
  }
}
