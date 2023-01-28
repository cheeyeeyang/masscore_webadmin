import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserModel } from 'src/app/models/user_model';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  role:any;
  user:any;
  constructor(public translate: TranslateService, private router:Router, private authservice: AuthService) {
    translate.addLangs(['lao', 'en']);
    translate.setDefaultLang('lao');
  }
  ngOnInit() : void {
    this.role = localStorage.getItem('role');
    this.authservice.getUser().subscribe( res => 
      this.user = res.users
      , err => console.log(err));
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
  changeLao(){
    this.translate.use('lao');
  }
  changeEnglish(){
    this.translate.use('en');
  }
  logout(){
    this.authservice.deleteToken();
    localStorage.removeItem('role');
    this.router.navigateByUrl('/');
  }
}
