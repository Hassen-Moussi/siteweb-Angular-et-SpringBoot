import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddoffreComponent } from './addoffre/addoffre.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthguardGuard } from './authguard.guard';
import { LogincComponent } from './candidat/loginc/loginc.component';
import { ProfilcComponent } from './candidat/profilc/profilc.component';
import { SignInComponent } from './candidat/signU/sign-in.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { CantactComponent } from './cantact/cantact.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { UpdateComponent } from './crud/update/update.component';
import { Update2Component } from './crud/update2/update2.component';
import { UpdateoffreComponent } from './crud/updateoffre/updateoffre.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HommeComponent } from './homme/homme.component';

import { OffreComponent } from './offre/offre.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path: 'user', component: UserDashboardComponent},
  {path: 'admin', component:AdminDashboardComponent},
  {path: 'update/:id', component:UpdateComponent},
  {path: 'signupc' , component:SignInComponent},
  {path: 'loginc' , component:LogincComponent},
  {path: 'update2/:id', component:Update2Component},
  {path:'',component:HommeComponent},
  {path:'profil',component:ProfilComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'offre',component:OffreComponent},
  {path:'cantact',component:CantactComponent},
  {path:'about',component:AboutComponent},
  {path:'profilc',component:ProfilcComponent},
  {path:'addcandidature/:id',component:CandidatureComponent},
  {path:'addoffre',component:AddoffreComponent},
  {path:'updateoffre/:id',component:UpdateoffreComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
