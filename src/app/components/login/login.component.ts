import { Component } from '@angular/core';
import { User } from 'src/app/models/auth_model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  user = new User();
  constructor(private authService: AuthService,private router: Router) {}
  //login
  login() {
    this.router.navigateByUrl('/home');
  }
}
