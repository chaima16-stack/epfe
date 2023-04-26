import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:8085/SpringMVC/servlet';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Profil={
    id:"",
    role:''
  }
  isLoginIn:boolean=false
  constructor(private http: HttpClient) { }

login(mail:string,mdp:string){
 return this.http.get(baseUrl+'/login/'+mail+'/'+mdp)
}
cnx(id:number){
  return this.http.get(baseUrl+'/cnx/'+id,{responseType: 'text'})
}
register(data:any,idgrp:number,idfor:number){
 return this.http.post(baseUrl+'/createEtudiant/'+idgrp+'/'+idfor,data)
}

SaveDataProfil(id:any,role:any,proj:any){
  localStorage.setItem('id',id)
  localStorage.setItem('role',role)
  localStorage.setItem("projet",proj)
  localStorage.setItem('islogin','1')
  this.Profil.id=id
  this.Profil.role=role
  this.isLoginIn=true
}

}
