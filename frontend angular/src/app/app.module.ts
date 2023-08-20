import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { UpdateComponent } from './crud/update/update.component';
import { LogincComponent } from './candidat/loginc/loginc.component';
import { Update2Component } from './crud/update2/update2.component';
import { HommeComponent } from './homme/homme.component';
import { ProfilComponent } from './profil/profil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CantactComponent } from './cantact/cantact.component';
import { AboutComponent } from './about/about.component';
import { OffreComponent } from './offre/offre.component';
import { ProfilcComponent } from './candidat/profilc/profilc.component';


import { SearchFilterPipe } from './search-filter.pipe';
import { AuthguardGuard } from './authguard.guard';
import { CandidatureComponent } from './candidature/candidature.component';
import { AddoffreComponent } from './addoffre/addoffre.component';
import { UpdateoffreComponent } from './crud/updateoffre/updateoffre.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogincComponent,
    SignupComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    UpdateComponent,
    Update2Component,
    HommeComponent,
    ProfilComponent,
    HeaderComponent,
    FooterComponent,
    CantactComponent,
    AboutComponent,
    OffreComponent,
    ProfilcComponent,
    AddoffreComponent,
 
    CandidatureComponent,
       UpdateoffreComponent
  

  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [
    AuthguardGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
