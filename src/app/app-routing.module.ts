import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
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
    {path: 'dashboard', component: DashboardComponent},
    {path: 'subject', component: SubjectComponent},
    {path: 'theory', component: TheoryComponent},
    {path: 'religion', component: ReligionComponent},
    {path: 'ethnicity', component: EthnicityComponent},
    {path: 'user', component: UserComponent},
    {path: 'govermentposition', component: GovermentpositionComponent},
    {path: 'organizationposition', component: OganizationpositionComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
