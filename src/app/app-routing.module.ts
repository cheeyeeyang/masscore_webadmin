import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './auth/authguard.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EthnicityComponent } from './components/settings/ethnicity/ethnicity.component';
import { GovermentpositionComponent } from './components/settings/govermentposition/govermentposition.component';
import { OganizationpositionComponent } from './components/settings/oganizationposition/oganizationposition.component';
import { ReligionComponent } from './components/settings/religion/religion.component';
import { SubjectComponent } from './components/settings/subject/subject.component';
import { TheoryComponent } from './components/settings/theory/theory.component';
import { UserComponent } from './components/settings/user/user.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home',component: HomeComponent, children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthguardGuard]},
    {path: 'forbidden', component: ForbiddenComponent},
    {path: 'subject', component: SubjectComponent,canActivate: [AuthguardGuard]},
    {path: 'theory', component: TheoryComponent,canActivate: [AuthguardGuard]},
    {path: 'religion', component: ReligionComponent,canActivate: [AuthguardGuard]},
    {path: 'ethnicity', component: EthnicityComponent,canActivate: [AuthguardGuard]},
    {path: 'user', component: UserComponent,canActivate: [AuthguardGuard]},
    {path: 'govermentposition', component: GovermentpositionComponent,canActivate: [AuthguardGuard]},
    {path: 'organizationposition', component: OganizationpositionComponent, canActivate: [AuthguardGuard]}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
