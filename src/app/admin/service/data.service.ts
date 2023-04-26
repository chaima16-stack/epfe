import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:8085/SpringMVC/servlet';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(baseUrl+'/listEnseignant');
  }
  getAllensTech(id:any){
    return this.http.get(baseUrl+'/listEnseignantTech/'+id);
  }
  add(enseignant:any,tech1:number,tech2:number,tech3:number){
    return this.http.post(baseUrl+'/createEnseignant/'+tech1+'/'+tech2+'/'+tech3,enseignant);
  }
  delete(id:any){
    return this.http.delete(baseUrl+'/deleteEnseignant/'+id);
  }
  update(id:any,newens:any){
    return this.http.put(baseUrl+'/updateEnseignant/'+id,newens)
  }
  //bd
  getAllbd(){
    return this.http.get(baseUrl+'/listBase_donnees');
  }
  addbd(bd:any){
    return this.http.post(baseUrl+'/createBase_donnees',bd);
  }
  deletebd(id:any){
    return this.http.delete(baseUrl+'/deleteBase_donnees/'+id);
  }
  updatebd(id:any,newbd:any){
    return this.http.put(baseUrl+'/updateBase_donnees/'+id,newbd)
  }
//formation
getAllfor(){
  return this.http.get(baseUrl+'/listFormation');
}
addfor(form:any){
  return this.http.post(baseUrl+'/createFormation',form);
}
deletefor(id:any){
  return this.http.delete(baseUrl+'/deleteFormation/'+id);
}
updatefor(id:any,newfor:any){
  return this.http.put(baseUrl+'/updateFormation/'+id,newfor)
}
  ///////
  //grp

addgpr(gpr:any){
  return this.http.post(baseUrl+'/creategroupe',gpr);
}
deletegpr(id:any){
  return this.http.delete(baseUrl+'/deletegroupe/'+id);
}
updategpr(id:any,newgpr:any){
  return this.http.put(baseUrl+'/updategroupe/'+id,newgpr)
}
  ///////
    //tech
    getAlltech(){
      return this.http.get(baseUrl+'/listTechnologie');
    }
addtech(tech:any){
  return this.http.post(baseUrl+'/createTechnologie',tech);
}
deletetech(id:any){
  return this.http.delete(baseUrl+'/deleteTechnologie/'+id);
}
updatetech(id:any,newtech:any){
  return this.http.put(baseUrl+'/updateTechnologie/'+id,newtech)
}
  ///////
   //mc
   getAllmc(){
    return this.http.get(baseUrl+'/listMethode_conception');
  }
addmc(mc:any){
return this.http.post(baseUrl+'/createMethode_conception',mc);
}
deletemc(id:any){
return this.http.delete(baseUrl+'/deleteMethode_conception/'+id);
}
updatemc(id:any,newmc:any){
return this.http.put(baseUrl+'/updateMethode_conception/'+id,newmc)
}
///////
 //etudiant
 getAlletd(){
  return this.http.get(baseUrl+'/listEtudiant');
}
deleteetd(id:any){
  return this.http.delete(baseUrl+'/deleteEtudiant/'+id);
  }
  //societe
 getAllsoc(){
  return this.http.get(baseUrl+'/listSociete');
}
deletesoc(id:any){
  return this.http.delete(baseUrl+'/deleteSociete/'+id);
  }
  ///

//projet
getAllproj(){
  return this.http.get(baseUrl+'/listProjet');
}
deleteproj(id:any){
  return this.http.delete(baseUrl+'/deleteProjet/'+id);
}
  addproj(reqbody:any,tech1:number,tech2:number,tech3:number,idetd:number,idbd:number,idmth:number){
    return this.http.post(baseUrl+'/createProjet/'+tech1+'/'+tech2+'/'+tech3+'/'+idetd+'/'+idbd+'/'+idmth,reqbody);
  }
  
  ///

  getAllgrp(){
    return this.http.get(baseUrl+'/listGroupe');
  }
  getAllformation(){
    return this.http.get(baseUrl+'/listFormation');
  }

  adddepot(proj:any){
    return this.http.put(baseUrl+'/createdepot',proj);
  }
  addbinome(id:any,proj:any){
    return this.http.put(baseUrl+'/addbinome/'+id,proj);
  }
}
