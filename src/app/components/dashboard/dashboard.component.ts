import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {
  constructor(private toastr: ToastrService){}
  showToastr(){
    this.toastr.success('ສໍາເລັດແລ້ວ', 'ບັນທຶກ');
  }
}
