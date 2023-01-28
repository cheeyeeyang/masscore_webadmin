import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './auth/authguard.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DividendComponent } from './components/modules/dividend/dividend.component';
import { EconomicfundmoneyComponent } from './components/modules/economicfundmoney/economicfundmoney.component';
import { InvestmentprojectComponent } from './components/modules/investmentproject/investmentproject.component';
import { MembermassorganizationComponent } from './components/modules/membermassorganization/membermassorganization.component';
import { MovementstatisticComponent } from './components/modules/movementstatistic/movementstatistic.component';
import { ConsolidatedreportComponent } from './components/reports/consolidatedreport/consolidatedreport.component';
import { DividendreportComponent } from './components/reports/dividendreport/dividendreport.component';
import { InvestmentprojectreportComponent } from './components/reports/investmentprojectreport/investmentprojectreport.component';
import { MembermassorganizingreportComponent } from './components/reports/membermassorganizingreport/membermassorganizingreport.component';
import { ReportgivingstatisticComponent } from './components/reports/reportgivingstatistic/reportgivingstatistic.component';
import { EthnicityComponent } from './components/settings/ethnicity/ethnicity.component';
import { GovermentpositionComponent } from './components/settings/govermentposition/govermentposition.component';
import { MasspositionComponent } from './components/settings/massposition/massposition.component';
import { OganizationpositionComponent } from './components/settings/oganizationposition/oganizationposition.component';
import { PartypositionComponent } from './components/settings/partyposition/partyposition.component';
import { ReligionComponent } from './components/settings/religion/religion.component';
import { SubjectComponent } from './components/settings/subject/subject.component';
import { TheoryComponent } from './components/settings/theory/theory.component';
import { UserComponent } from './components/settings/user/user.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home',component: HomeComponent, children: [
     //ຕັ້ງຄ່າ
    {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthguardGuard]},
    {path: 'forbidden', component: ForbiddenComponent},
    {path: 'subject', component: SubjectComponent,canActivate: [AuthguardGuard]},
    {path: 'theory', component: TheoryComponent,canActivate: [AuthguardGuard]},
    {path: 'religion', component: ReligionComponent,canActivate: [AuthguardGuard]},
    {path: 'ethnicity', component: EthnicityComponent,canActivate: [AuthguardGuard]},
    {path: 'user', component: UserComponent,canActivate: [AuthguardGuard]},
    {path: 'govermentposition', component: GovermentpositionComponent,canActivate: [AuthguardGuard]},
    {path: 'partyposition', component: PartypositionComponent,canActivate: [AuthguardGuard]},
    {path: 'organizationposition', component: OganizationpositionComponent, canActivate: [AuthguardGuard]},
    {path: 'massposition', component: MasspositionComponent, canActivate: [AuthguardGuard]},
    //ໂມດູນ
    {path: 'dividend', component: DividendComponent, canActivate: [AuthguardGuard]},
    {path: 'economicfundmoney', component: EconomicfundmoneyComponent, canActivate: [AuthguardGuard]},
    {path: 'investmentproject', component: InvestmentprojectComponent, canActivate: [AuthguardGuard]},
    {path: 'membermassorganization', component: MembermassorganizationComponent, canActivate: [AuthguardGuard]},
    {path: 'movementsttistic', component: MovementstatisticComponent, canActivate: [AuthguardGuard]},
    //ລາຍງານ
    {path: 'consolidatedreport', component: ConsolidatedreportComponent, canActivate: [AuthguardGuard]},
    {path: 'dividendreport', component: DividendreportComponent, canActivate: [AuthguardGuard]},
    {path: 'investmentprojectreport', component: InvestmentprojectreportComponent, canActivate: [AuthguardGuard]},
    {path: 'membermassorganizationreport', component: MembermassorganizingreportComponent, canActivate: [AuthguardGuard]},
    {path: 'reportgivingstatistic', component: ReportgivingstatisticComponent, canActivate: [AuthguardGuard]},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
