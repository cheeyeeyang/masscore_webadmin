import { Component } from '@angular/core';
import { MassModel } from 'src/app/models/mass_model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-massposition',
  templateUrl: './massposition.component.html',
  styleUrls: ['./massposition.component.sass']
})
export class MasspositionComponent {
  loading = true;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  searchT:any;
  dataList: MassModel[] = [];
  constructor(private service: AuthService){
  }
  ngOnInit() : void{
      this.getData();
  }
  //get data 
  getData(){
    this.service.getMassPosition().subscribe((res: MassModel[]) => {
      this.dataList = res;
      setTimeout(() => {
        this.loading = false;
      }, 300);
    });
  }
}
