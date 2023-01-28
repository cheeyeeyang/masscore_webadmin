import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SubjectComponent } from './components/settings/subject/subject.component';
import { TheoryComponent } from './components/settings/theory/theory.component';
import { ReligionComponent } from './components/settings/religion/religion.component';
import { EthnicityComponent } from './components/settings/ethnicity/ethnicity.component';
import { UserComponent } from './components/settings/user/user.component';
import { GovermentpositionComponent } from './components/settings/govermentposition/govermentposition.component';
import { OganizationpositionComponent } from './components/settings/oganizationposition/oganizationposition.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/login/login.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { HomeComponent } from './components/home/home.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PartypositionComponent } from './components/settings/partyposition/partyposition.component';
import { MasspositionComponent } from './components/settings/massposition/massposition.component';
import { MembermassorganizationComponent } from './components/modules/membermassorganization/membermassorganization.component';
import { EconomicfundmoneyComponent } from './components/modules/economicfundmoney/economicfundmoney.component';
import { MovementstatisticComponent } from './components/modules/movementstatistic/movementstatistic.component';
import { InvestmentprojectComponent } from './components/modules/investmentproject/investmentproject.component';
import { DividendComponent } from './components/modules/dividend/dividend.component';
import { ConsolidatedreportComponent } from './components/reports/consolidatedreport/consolidatedreport.component';
import { InvestmentprojectreportComponent } from './components/reports/investmentprojectreport/investmentprojectreport.component';
import { DividendreportComponent } from './components/reports/dividendreport/dividendreport.component';
import { ReportgivingstatisticComponent } from './components/reports/reportgivingstatistic/reportgivingstatistic.component';
import { MembermassorganizingreportComponent } from './components/reports/membermassorganizingreport/membermassorganizingreport.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SubjectComponent,
    TheoryComponent,
    ReligionComponent,
    EthnicityComponent,
    UserComponent,
    GovermentpositionComponent,
    OganizationpositionComponent,
    LoginComponent,
    ForbiddenComponent,
    HomeComponent,
    PartypositionComponent,
    MasspositionComponent,
    MembermassorganizationComponent,
    EconomicfundmoneyComponent,
    MovementstatisticComponent,
    InvestmentprojectComponent,
    DividendComponent,
    ConsolidatedreportComponent,
    InvestmentprojectreportComponent,
    DividendreportComponent,
    ReportgivingstatisticComponent,
    MembermassorganizingreportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}