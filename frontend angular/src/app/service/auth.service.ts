import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidature } from '../model/candidature';
import { Utilisateur } from '../model/condidat';
import { Offre } from '../model/offre';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  competanceLi(code: string) {
    throw new Error('Method not implemented.');
  }

  islogin=false;

  loginUrl : string = '';
  signUpUrl : string = '';
  updateUrl: string='';
  updateUrl2: string='';
  getbyidUrl:string='';
  deletUrl:string='';
  deletUrl2:string='';
  getbyidUrl2:string='';
  getactiveUrl:string='';
  getallurl:string='';
  getlogincurl:string='';

  addOffreUrl:string='';
  getallOffersUrl:string='';
  getallcandidaturesUrl:string='';
  addcandidatureUrl:string='';
  deleteoffreUrl:string='';
  updateoffreUrl:string='';
  getoffrebyidUrl:string='';
  getuserbyusernameUrl:string='';
  getcandidatbylastnameUrl:string='';
  getimageUrl:string='';
  constructor(private http : HttpClient) {

    this.loginUrl = "http://localhost:8080/auth/login";
    this.signUpUrl = "http://localhost:8080/auth/register";
    this.updateUrl="http://localhost:8080/auth/update";
    this.getbyidUrl="http://localhost:8080/auth/FindById/";
    this.deletUrl="http://localhost:8080/auth/delete/"
    this.getactiveUrl="http://localhost:8080/auth/FindBy/";
    this.getallurl="http://localhost:8080/auth/Alluser"
    this.updateUrl2="http://localhost:8080/Utilisateur/UpdateUtilisateur";
    this.deletUrl2="http://localhost:8080/Utilisateur/"
    this.getbyidUrl2="http://localhost:8080/Utilisateur/FindById/";
    this.getlogincurl="http://localhost:8080/Utilisateur/login";
    this.addOffreUrl="http://localhost:8080/offre/add";
    this.addOffreUrl="http://localhost:8080/Offre/Addoffre";
    this.getallOffersUrl="http://localhost:8080/Offre/Alloffres";
    this.addcandidatureUrl="http://localhost:8080/Candidature/Addcandidature";
    this.deleteoffreUrl="http://localhost:8080/Offre/deleteoffre/";
    this.updateoffreUrl="http://localhost:8080/Offre/updateoffre";
    this.getoffrebyidUrl="http://localhost:8080/Offre/FindOffreById/";
    this.getuserbyusernameUrl="http://localhost:8080/auth/FindByUsername/";
    this.getcandidatbylastnameUrl="http://localhost:8080/Utilisateur/findbylastname/";
    this.getimageUrl="http://localhost:8080/image/addimage/";

  }

  login(user : User) : Observable<any> {
    return this.http.post<any>(this.loginUrl,user);
  }

  signUp(user : User) : Observable<any> {
    return this.http.post<any>(this.signUpUrl,user);
  }
  
  update(user : User) : Observable<any> {
    return this.http.put<any>(this.updateUrl,user);
  }
getbyid(id:number){
  return this.http.get<User>(this.getbyidUrl+id);
  
}
delet(id:number){
  return this.http.delete<User>(this.deletUrl+id);
}
getactive(id:number){
  return this.http.get<boolean>(this.getactiveUrl+id);
  
}
getAll(): Observable<any> {
   
  return this.http.get(this.getallurl);
}

delet2(id:number){
  return this.http.delete<Utilisateur>(this.deletUrl2+id);
}
update2(utilisateur : Utilisateur) : Observable<any> {
  return this.http.put<any>(this.updateUrl2,utilisateur);
}

getbyid2(id:number){
  return this.http.get<Utilisateur>(this.getbyidUrl2+id);
  
}

loginc(utilisateur:Utilisateur) : Observable<any> {
  return this.http.post<any>(this.getlogincurl,utilisateur);
}

addoffre(offre:Offre)  {
  return this.http.post<Offre>(this.addOffreUrl,offre);
}
addcandidature(candidature : Candidature) : Observable<any> {
  return this.http.post<Candidature>(this.addcandidatureUrl,candidature);
}
getofferhome():Observable<any> {
  return this.http.get(this.getallOffersUrl);
}
deletoffre(id:number){
  return this.http.delete<Offre>(this.deleteoffreUrl+id);
}

updateoffre(offre : Offre) : Observable<any> {
  return this.http.put<any>(this.updateoffreUrl,offre);
}

getoffrebyid(id:number){
  return this.http.get<Offre>(this.getoffrebyidUrl+id);
  
}
getuserbyusername(username:string){
  return this.http.get<User>(this.getuserbyusernameUrl+username);
}

getcandidatbylastname(lastname:string){
  return this.http.get<Utilisateur>(this.getcandidatbylastnameUrl+lastname);
}
uploadimage(imageurl:Blob) {
  return this.http.post<ImageData>(this.getimageUrl+imageurl,ImageData);
}


}
