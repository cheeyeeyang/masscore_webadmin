import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/auth_model';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  public checkLogin : string = 'false';
  public logifailed: string = "";
  user = new User();
  constructor(private authService: AuthService, private router:Router) {}
  //login
  login(user: User) {
    this.checkLogin = 'active';
    this.authService.login(user).subscribe(
      res => {
        this.authService.setToken(res);
        this.getUser();
      },
      err => {
        this.checkLogin = 'false';
        this.logifailed = 'ຊື່ຜູ້ໃຊ້ ຫຼື ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ';
      }
    );
  }
  getUser(){
    this.authService.getUser().subscribe(
      (res :any)=> {
         localStorage.setItem('role', res.role);
         this.checkLogin = 'true';
         this.router.navigate(['/home']);
      },
      err => { 
        console.log(err);
      }
    );
  }
}
