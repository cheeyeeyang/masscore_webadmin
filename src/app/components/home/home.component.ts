import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['lao', 'en']);
    translate.setDefaultLang('lao');
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
