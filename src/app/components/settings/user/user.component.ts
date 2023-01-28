
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DistrictModel } from 'src/app/models/district_model';
import { EthnicityModel } from 'src/app/models/ethnicity_model';
import { GovermentPositionModel } from 'src/app/models/govermentposition_model';
import { MassModel } from 'src/app/models/mass_model';
import { OrganizationPositionModel } from 'src/app/models/organizationposition_model';
import { PartyPositionModel } from 'src/app/models/party_position_model';
import { ProvinceModel } from 'src/app/models/province_model';
import { ReligionModel } from 'src/app/models/religion_model';
import { SubjectModel } from 'src/app/models/subject_model';
import { TheoryModel } from 'src/app/models/theory_model';
import { UserModel } from 'src/app/models/user_model';
import { VillageModel } from 'src/app/models/village_model';
import { AuthService } from 'src/app/services/auth.service';
import { EthnicityService } from 'src/app/services/ethnicity.service';
import { GovermentpositionService } from 'src/app/services/govermentposition.service';
import { OrganizationpositionService } from 'src/app/services/organizationposition.service';
import { PartypositionService } from 'src/app/services/partyposition.service';
import { ReligionService } from 'src/app/services/religion.service';
import { SubjectService } from 'src/app/services/subject.service';
import { TheoryService } from 'src/app/services/theory.service';
import {formatDate} from '@angular/common';
declare var $:any
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
  providers:[AuthService]
})
export class UserComponent {
  loading = true;
  role:any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  searchT:any;
  form: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    username: new FormControl(''),
    phonenumber: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl(''),
    theory_id :  new FormControl(''),
    religion_id :  new FormControl(''),
    ethnicity_id :  new FormControl(''),
    code: new FormControl(''),
    birthday: new FormControl(''),
    date_start_work: new FormControl(''),
    born_village_id: new FormControl(''),
    born_district_id: new FormControl(''),
    born_province_id: new FormControl(''),
    village_id: new FormControl(''),
    district_id: new FormControl(''),
    province_id: new FormControl(''),
    subject_id: new FormControl(''),
    youth_date: new FormControl(''),
    committee_date: new FormControl(''),
    woman_date: new FormControl(''),
    reverve_party_date: new FormControl(''),
    perfect_party_date: new FormControl(''),
    party_position_id: new FormControl(''),
    organiztion_position_id: new FormControl(''),
    govement_position_id: new FormControl(''),
    note: new FormControl(''),
    profile: new FormControl(''),
    mass_id:  new FormControl(''),
    createdDate: new FormControl(''),
    datestartwork: new  FormControl(''),
    youthdate: new  FormControl(''),
    committeedate: new  FormControl(''),
    womandate: new  FormControl(''),
    revervepartydate: new  FormControl(''),
    perfectpartydate: new  FormControl(''),
    checkimg: new  FormControl(''),
    ethnicity: new  FormControl(''),
    religion: new  FormControl(''),
    bornvillage: new  FormControl(''),
    borndistrict: new  FormControl(''),
    bornprovince: new  FormControl(''),
    village: new  FormControl(''),
    district: new  FormControl(''),
    province: new  FormControl(''),
    subject: new  FormControl(''),
    theory: new  FormControl(''),
    party: new  FormControl(''),
    organization: new  FormControl(''),
    goverment: new  FormControl(''),
    massorganization: new  FormControl(''),
  });
  formedit: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    username: new FormControl(''),
    phonenumber: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl(''),
    theory_id :  new FormControl(''),
    religion_id :  new FormControl(''),
    ethnicity_id :  new FormControl(''),
    code: new FormControl(''),
    birthday: new FormControl(''),
    date_start_work: new FormControl(''),
    born_village_id: new FormControl(''),
    born_district_id: new FormControl(''),
    born_province_id: new FormControl(''),
    village_id: new FormControl(''),
    district_id: new FormControl(''),
    province_id: new FormControl(''),
    subject_id: new FormControl(''),
    youth_date: new FormControl(''),
    committee_date: new FormControl(''),
    woman_date: new FormControl(''),
    reverve_party_date: new FormControl(''),
    perfect_party_date: new FormControl(''),
    party_position_id: new FormControl(''),
    organiztion_position_id: new FormControl(''),
    govement_position_id: new FormControl(''),
    note: new FormControl(''),
    profile: new FormControl(''),
    mass_id:  new FormControl(''),
    createdDate: new FormControl(''),
    datestartwork: new  FormControl(''),
    youthdate: new  FormControl(''),
    committeedate: new  FormControl(''),
    womandate: new  FormControl(''),
    revervepartydate: new  FormControl(''),
    perfectpartydate: new  FormControl(''),
    checkimg: new  FormControl(''),
    ethnicity: new  FormControl(''),
    religion: new  FormControl(''),
    bornvillage: new  FormControl(''),
    borndistrict: new  FormControl(''),
    bornprovince: new  FormControl(''),
    village: new  FormControl(''),
    district: new  FormControl(''),
    province: new  FormControl(''),
    subject: new  FormControl(''),
    theory: new  FormControl(''),
    party: new  FormControl(''),
    organization: new  FormControl(''),
    goverment: new  FormControl(''),
    massorganization: new  FormControl(''),
  });
  submitted:boolean = false;
  hiddenId:any = '';
  dataList: UserModel[] = [];
  provinceList: ProvinceModel[] = [];
  districtList: DistrictModel[] = [];
  villageList : VillageModel[] = [];
  born_districtList: DistrictModel[] = [];
  born_villageList : VillageModel[] = [];
  subjectList: SubjectModel[] = [];
  theoryList: TheoryModel[] = [];
  religionList: ReligionModel[] = [];
  ethnicityList: EthnicityModel[] = [];
  partypositionList : PartyPositionModel[] = [];
  govermentpositionList: GovermentPositionModel[] = [];
  organizationpositionList: OrganizationPositionModel[] = [];
  massList:MassModel[] = [];
  public model = new UserModel();
  imageUrl: string = "/assets/img/profile.jpg";
  fileToUpload: File | any;
  constructor(private service: AuthService, private subjectService: SubjectService,private theoryService: TheoryService,private religionService: ReligionService,private ethnicityService:EthnicityService, private govermentpositionService: GovermentpositionService, private organizationpositionService: OrganizationpositionService,private partyService:PartypositionService,  private fb: FormBuilder, private toastr:ToastrService){
  }
  ngOnInit(){
      this.getData(); 
      this.form = this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        username: ['', Validators.required],
        phonenumber: ['',Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        role: ['', Validators.required],
        theory_id :  [''],
        religion_id :  [''],
        ethnicity_id :  [''],
        code: [''],
        birthday: [''],
        date_start_work: [''],
        born_village_id: [''],
        born_district_id: [''],
        born_province_id: [''],
        village_id: [''],
        district_id: [''],
        province_id: [''],
        subject_id: [''],
        youth_date: [''],
        committee_date: [''],
        woman_date: [''],
        reverve_party_date: [''],
        perfect_party_date: [''],
        party_position_id: [''],
        organiztion_position_id: [''],
        govement_position_id: [''],
        note: [''],
        profile: [''],
        mass_id:  [''],
        createdDate: [''],
        datestartwork: [''],
        youthdate: [''],
        committeedate: [''],
        womandate: [''],
        revervepartydate: [''],
        perfectpartydate: [''],
        checkimg: [''],
        ethnicity: [''],
        religion: [''],
        bornvillage: [''],
        borndistrict: [''],
        bornprovince: [''],
        village: [''],
        district: [''],
        province: [''],
        subject: [''],
        theory: [''],
        party: [''],
        organization: [''],
        goverment: [''],
        massorganization: [''],
      });
      this.formedit = this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        username: ['', Validators.required],
        phonenumber: ['',Validators.required],
        email: ['', Validators.required],
        password: [''],
        role: [''],
        theory_id :  [''],
        religion_id :  [''],
        ethnicity_id :  [''],
        code: [''],
        birthday: [''],
        date_start_work: [''],
        born_village_id: [''],
        born_district_id: [''],
        born_province_id: [''],
        village_id: [''],
        district_id: [''],
        province_id: [''],
        subject_id: [''],
        youth_date: [''],
        committee_date: [''],
        woman_date: [''],
        reverve_party_date: [''],
        perfect_party_date: [''],
        party_position_id: [''],
        organiztion_position_id: [''],
        govement_position_id: [''],
        note: [''],
        profile: [''],
        mass_id:  [''],
        createdDate: [''],
        datestartwork: [''],
        youthdate: [''],
        committeedate: [''],
        womandate: [''],
        revervepartydate: [''],
        perfectpartydate: [''],
        checkimg: [''],
        ethnicity: [''],
        religion: [''],
        bornvillage: [''],
        borndistrict: [''],
        bornprovince: [''],
        village: [''],
        district: [''],
        province: [''],
        subject: [''],
        theory: [''],
        party: [''],
        organization: [''],
        goverment: [''],
        massorganization: [''],
      });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  get fedit(): { [key: string]: AbstractControl } {
    return this.formedit.controls;
  }
  onSelectedBornDistrict(event:any){
    this.service.getDistrict(event.target.value).subscribe((res:DistrictModel[]) => this.born_districtList = res);
  }
  onSelectedBornVillage(event:any){
    this.service.getVillage(event.target.value).subscribe((res:DistrictModel[]) => this.born_villageList = res);
  }
  onSelectedDistrict(event:any){
    this.service.getDistrict(event.target.value).subscribe((res:DistrictModel[]) => this.districtList = res);
  }
  onSelectedVillage(event:any){
    this.service.getVillage(event.target.value).subscribe((res:DistrictModel[]) => this.villageList = res);
  }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
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
     this.model.code= '';
     this.model.firstname = '';
     this.model.lastname = '';
     this.model.username = '';
     this.model.email = '';
     this.model.phonenumber = '';
     this.role = '';
     this.model.password = '';
     this.fileToUpload  = null;
     this.imageUrl = '/assets/img/profile.jpg';
  }
  //get data 
  getData(){
    this.service.getUsers().subscribe((res: UserModel[]) => {
      this.dataList = res;
      setTimeout(() => {
        this.loading = false;
      },300);
    });
    this.service.getProvince().subscribe((res: ProvinceModel[]) => this.provinceList = res);
    this.subjectService.Select().subscribe((res: SubjectModel[]) => this.subjectList = res);
    this.theoryService.Select().subscribe((res: TheoryModel[]) => this.theoryList = res);
    this.religionService.Select().subscribe((res: ReligionModel[]) => this.religionList = res);
    this.ethnicityService.Select().subscribe((res: EthnicityModel[]) => this.ethnicityList = res);
    this.partyService.Select().subscribe((res: PartyPositionModel[]) => this.partypositionList = res);
    this.govermentpositionService.Select().subscribe((res: GovermentPositionModel[]) => this.govermentpositionList = res);
    this.organizationpositionService.Select().subscribe((res: OrganizationPositionModel[]) => this.organizationpositionList = res);
    this.service.getMassPosition().subscribe((res:MassModel[]) => this.massList = res);
  }
  //make pagination
  pageChangeEvent(event: number){
    this.page = event;
    this.getData();
  }
  createData(model: UserModel) : void {
    var date = formatDate(new Date(), 'yyyy/MM/dd', 'en');
    this.submitted = true;
   if (this.form.invalid) {
     return;
   }
   const fb = new FormData();
   fb.append('username', model.username!.toString());
   fb.append('email',  model.email!.toString());
   fb.append('password', model.password!.toString());
   fb.append('role', this.role);
   fb.append('active', 'true');
   fb.append('firstname', model.firstname!.toString());
   fb.append('lastname', model.lastname!.toString());
   fb.append('phonenumber', model.phonenumber!.toString());
   if(model.code !=null){
   fb.append('code', model.code!.toString());
   }else{
    fb.append('code', 'NULL');
   }
   if(model.birthday !=null){
    fb.append('birthday', model.birthday!.toString());
   }else{
    fb.append('birthday', `${date}`);
   }
   if(model.date_start_work !=null){
    fb.append('date_start_work', model.date_start_work!.toString());
   }else{
    fb.append('date_start_work', `${date}`);
   }
   if(model.born_village_id !=null){
    fb.append('born_village_id', model.born_village_id!.toString());
   }else{
    fb.append('born_village_id', '0');
   }
   if(model.born_district_id !=null){
    fb.append('born_district_id', model.born_district_id!.toString());
   }else{
    fb.append('born_district_id', '0');
   }
   if(model.born_province_id !=null){
    fb.append('born_province_id', model.born_province_id!.toString());
   }else{
    fb.append('born_province_id', '0');
   }
   if(model.village_id !=null){
    fb.append('village_id', model.village_id!.toString());
   }else{
    fb.append('village_id', '0');
   }
   if(model.district_id !=null){
    fb.append('district_id',model.district_id!.toString());
   }else{
    fb.append('district_id','0');
   }
   if(model.province_id !=null){
    fb.append('province_id', model.province_id!.toString());
   }else{
    fb.append('province_id', '0');
   }
   if(model.subject_id !=null){
    fb.append('subject_id', model.subject_id!.toString());
   }else{
    fb.append('subject_id', '0');
   }
   if(model.theory_id !=null){
     fb.append('theory_id', model.theory_id!.toString());
   }else{
     fb.append('theory_id', '0');
   }
   if(model.religion_id !=null){
    fb.append('religion_id', model.religion_id!.toString());
   }else{
    fb.append('religion_id', '0');
   }
   if(model.ethnicity_id !=null){
    fb.append('ethnicity_id', model.ethnicity_id!.toString());
   }else{
    fb.append('ethnicity_id', '0');
   }
   if(model.youth_date !=null){
   fb.append('youth_date', model.youth_date!.toString());
   }else{
    fb.append('youth_date', `${date}`);
   }
   if(model.committee_date !=null){
    fb.append('committee_date', model.committee_date!.toString());
   }else{
    fb.append('committee_date', `${date}`);
   }
   if(model.woman_date !=null){
   fb.append('woman_date', model.woman_date!.toString());
   }else{
    fb.append('woman_date', `${date}`);
   }
   if(model.reverve_party_date !=null){
     fb.append('reverve_party_date', model.reverve_party_date!.toString());
   }else{
     fb.append('reverve_party_date', `${date}`);
   }
   if(model.perfect_party_date !=null){
    fb.append('perfect_party_date', model.perfect_party_date!.toString());
   }else{
    fb.append('perfect_party_date', `${date}`);
   }
   if(model.party_position_id !=null){
   fb.append('party_position_id', model.party_position_id!.toString());
   }else{
    fb.append('party_position_id', '0');
   }
   if( model.organizationposition_id !=null){
     fb.append('organiztion_position_id', model.organizationposition_id!.toString());
   }else{
     fb.append('organiztion_position_id', '0');
   }
   if(model.govement_position_id !=null){
     fb.append('govement_position_id', model.govement_position_id!.toString());
   }else{
     fb.append('govement_position_id', '0');
   }
   if(model.note !=null){
    fb.append('note',  model.note!.toString());
   }else{
    fb.append('note', 'NULL');
   }
   if(this.fileToUpload != undefined){
    fb.append('profile', this.fileToUpload);
   }else{
    fb.append('profile', 'null');
   }
   if(model.mass_id !=null){
    fb.append('mass_id',  model.mass_id!.toString());
   }else{
    fb.append('mass_id', '0');
   }
   fb.append('CreatedDate', `${date}`);
   this.service.Create(fb).subscribe((res: Response[]) => 
   {
     this.getData();
     this.resetField();
     this.successToastr();
     this.closecreateModal();
   },
   (error) => {
       this.warningToastr();
   }
 );
 }
//delete
deleteData() : void {
 this.service
   .Delete(this.model.id, this.model)
   .subscribe((res) => {
     this.getData();
     this.resetField();
     this.closedeleteModal();
     this.successToastr();
   }, (error) => {
     this.warningToastr();
   });
}
//update
updateData() {
  var date = formatDate(new Date(), 'yyyy/MM/dd', 'en');
    this.submitted = true;
   if (this.formedit.invalid) {
     return;
   }
   const fb = new FormData();
   fb.append('id', this.model.id);
   fb.append('username', this.model.username!.toString());
   fb.append('email',  this.model.email!.toString());
   if(this.model.password !=null){
    fb.append('password', this.model.password!.toString());
   }else{
    fb.append('password', '');
   }
   if(this.role !=null){
      fb.append('role', this.role);
   }else{
     fb.append('role', '');
   }
   fb.append('active', 'true');
   fb.append('firstname', this.model.firstname!.toString());
   fb.append('lastname', this.model.lastname!.toString());
   fb.append('phonenumber', this.model.phonenumber!.toString());
   if(this.model.code !=null){
   fb.append('code', this.model.code!.toString());
   }else{
    fb.append('code', 'NULL');
   }
   if(this.model.birthday !=null){
    fb.append('birthday', this.model.birthday!.toString());
   }else{
    fb.append('birthday', `${date}`);
   }
   if(this.model.date_start_work !=null){
    fb.append('date_start_work', this.model.date_start_work!.toString());
   }else{
    fb.append('date_start_work', `${date}`);
   }
   if(this.model.born_village_id !=null){
    fb.append('born_village_id', this.model.born_village_id!.toString());
   }else{
    fb.append('born_village_id', '0');
   }
   if(this.model.born_district_id !=null){
    fb.append('born_district_id', this.model.born_district_id!.toString());
   }else{
    fb.append('born_district_id', '0');
   }
   if(this.model.born_province_id !=null){
    fb.append('born_province_id', this.model.born_province_id!.toString());
   }else{
    fb.append('born_province_id', '0');
   }
   if(this.model.village_id !=null){
    fb.append('village_id', this.model.village_id!.toString());
   }else{
    fb.append('village_id', '0');
   }
   if(this.model.district_id !=null){
    fb.append('district_id',this.model.district_id!.toString());
   }else{
    fb.append('district_id','0');
   }
   if(this.model.province_id !=null){
    fb.append('province_id', this.model.province_id!.toString());
   }else{
    fb.append('province_id', '0');
   }
   if(this.model.subject_id !=null){
    fb.append('subject_id', this.model.subject_id!.toString());
   }else{
    fb.append('subject_id', '0');
   }
   if(this.model.theory_id !=null){
     fb.append('theory_id', this.model.theory_id!.toString());
   }else{
     fb.append('theory_id', '0');
   }
   if(this.model.religion_id !=null){
    fb.append('religion_id', this.model.religion_id!.toString());
   }else{
    fb.append('religion_id', '0');
   }
   if(this.model.ethnicity_id !=null){
    fb.append('ethnicity_id', this.model.ethnicity_id!.toString());
   }else{
    fb.append('ethnicity_id', '0');
   }
   if(this.model.youth_date !=null){
   fb.append('youth_date', this.model.youth_date!.toString());
   }else{
    fb.append('youth_date', `${date}`);
   }
   if(this.model.committee_date !=null){
    fb.append('committee_date', this.model.committee_date!.toString());
   }else{
    fb.append('committee_date', `${date}`);
   }
   if(this.model.woman_date !=null){
   fb.append('woman_date', this.model.woman_date!.toString());
   }else{
    fb.append('woman_date', `${date}`);
   }
   if(this.model.reverve_party_date !=null){
     fb.append('reverve_party_date', this.model.reverve_party_date!.toString());
   }else{
     fb.append('reverve_party_date', `${date}`);
   }
   if(this.model.perfect_party_date !=null){
    fb.append('perfect_party_date', this.model.perfect_party_date!.toString());
   }else{
    fb.append('perfect_party_date', `${date}`);
   }
   if(this.model.party_position_id !=null){
   fb.append('party_position_id', this.model.party_position_id!.toString());
   }else{
    fb.append('party_position_id', '0');
   }
   if( this.model.organizationposition_id !=null){
     fb.append('organiztion_position_id', this.model.organizationposition_id!.toString());
   }else{
     fb.append('organiztion_position_id', '0');
   }
   if(this.model.govement_position_id !=null){
     fb.append('govement_position_id', this.model.govement_position_id!.toString());
   }else{
     fb.append('govement_position_id', '0');
   }
   if(this.model.note !=null){
    fb.append('note',  this.model.note!.toString());
   }else{
    fb.append('note', 'NULL');
   }
   if(this.fileToUpload != undefined){
    fb.append('profile', this.fileToUpload);
   }else{
    fb.append('profile', 'null');
   }
   if(this.model.mass_id !=null){
    fb.append('mass_id',  this.model.mass_id!.toString());
   }else{
    fb.append('mass_id', '0');
   }
   this.service.Update(this.model.id,fb).subscribe((res: Response[]) => 
   {
     this.getData();
     this.resetField();
     this.successToastr();
     this.closeeditModal();
   },
   (error) => {
       this.warningToastr();
   }
 );
}
//create modal
opencreateModal(){
  this.resetField();
  $('#modal-add').modal('show');
 }
 closecreateModal(){
   $('#modal-add').modal('hide');
 }
 //edit modal
 openeditModal(data : UserModel){
   this.resetField();
   this.model.id = data.id;
   this.model.code = data.code;
   this.model.firstname = data.firstname;
   this.model.lastname = data.lastname;
   this.model.username = data.username;
   this.model.phonenumber = data.phonenumber;
   this.model.email = data.email;
   this.model.password = data.password;
   this.model.theory_id = data.theory_id;
   this.model.religion_id = data.religion_id;
   this.model.ethnicity_id  = data.ethnicity_id;
   this.model.code  = data.code;
   this.model.birthday = data.birthday;
   this.model.date_start_work = data.date_start_work;
   this.model.born_village_id = data.born_village_id;
   this.model.born_district_id = data.born_district_id;
   this.model.born_province_id = data.born_province_id;
   this.model.village_id = data.village_id;
   this.model.district_id = data.district_id;
   this.model.province_id = data.province_id;
   this.model.subject_id = data.subject_id;
   this.model.youth_date = data.youth_date;
   this.model.committee_date = data.committee_date;
   this.model.woman_date = data.woman_date;
   this.model.reverve_party_date = data.reverve_party_date;
   this.model.perfect_party_date = data.perfect_party_date;
   this.model.party_position_id = data.party_position_id;
   this.model.organiztion_position_id = data.organiztion_position_id;
   this.model.govement_position_id = data.govement_position_id;
   this.model.note = data.note;
   this.model.profile = data.profile;
   this.model.mass_id = data.mass_id;
   this.model.checkimg =  data.checkimg;
   $('#modal-edit').modal('show');
  }
  closeeditModal(){
    $('#modal-edit').modal('hide');
  }
  //delete modal
  opendeleteModal(data : UserModel){
    this.model.id = data.id;
    this.model.firstname = data.firstname;
    this.model.lastname = data.lastname;
    this.model.email = data.email;
    this.model.active = false;
   $('#modal-delete').modal('show');
  }
  closedeleteModal(){
    $('#modal-delete').modal('hide');
  }
  public createImgPath = (serverPath: string) => { 
    return `https://localhost:7047/${serverPath}`; 
  }
  opendetailModal(data : UserModel){
     this.resetField();
     this.model.code = data.code;
     this.model.firstname = data.firstname;
     this.model.lastname = data.lastname;
     this.model.username = data.username;
     this.model.phonenumber = data.phonenumber;
     this.model.email = data.email;
     this.model.password = data.password;
     this.model.birthday = data.birthday;
     this.model.datestartwork = data.datestartwork;
     this.model.note =  data.note;
     this.model.profile = data.profile;
     this.model.createdDate = data.createdDate;
     this.model.datestartwork =  data.datestartwork;
     this.model.youthdate =  data.youthdate;
     this.model.committeedate =  data.committeedate;
     this.model.womandate = data.womandate;
     this.model.revervepartydate = data.revervepartydate;
     this.model.perfectpartydate = data.perfectpartydate;
     this.model.checkimg = data.checkimg;
     this.model.ethnicity = data.ethnicity;
     this.model.religion = data.religion;
     this.model.bornvillage = data.bornvillage;
     this.model.borndistrict = data.borndistrict;
     this.model.bornprovince = data.bornprovince;
     this.model.village = data.village;
     this.model.district = data.district;
     this.model.province =  data.province;
     this.model.subject = data.subject;
     this.model.theory = data.theory;
     this.model.party = data.party;
     this.model.organization = data.organization;
     this.model.goverment = data.goverment;
     this.model.massorganization = data.massorganization;
     $('#modal-detail').modal('show');
    }
    closedetailModal(){
      $('#modal-detail').modal('hide');
    }
}
