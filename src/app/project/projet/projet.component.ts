import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/admin/service/data.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
m=0
  bd=0
  mth=0
  req={
    proj:{

    },
    soc:{

    }
  }
  soc={
    nom:"",
    adresse:{
      num:0,
      rue:"",
      ville:"",
      codeP:0
    },
    mail:"",
    tel:0,
    
  }
  message=""
  dataArray:any=[ ]
  databd:any=[ ]
  datamth:any=[ ]
    constructor(private ds:DataService,private route:Router,private route1:ActivatedRoute){
  
    }
  ngOnInit(): void {
    this.route1.params
    .subscribe(params => {
        this.m=params['m'];
      //   this.m=Object.values(JSON.parse(this.m))
      
      console.log(this.m); 
    }
  ); 
    this.ds.getAlltech().subscribe(response=>
      {
        console.log(response)
    this.dataArray=response
      })
      this.ds.getAllbd().subscribe(response=>
        {
          console.log(response)
      this.databd=response
        })
        this.ds.getAllmc().subscribe(response=>
          {
            console.log(response)
        this.datamth=response
          })
  }
   add(F:any){
  
      let data=F.value
      console.log(data)
     let tech=parseInt(data.tech)
      let tech1=parseInt(data.tech1)
      let tech2=parseInt(data.tech2)
      data.duree=parseInt(data.duree)
      data.annee=parseInt(data.annee)
     this.bd=parseInt(data.bd)
      data.codep=parseInt(data.codep)
     this. mth=parseInt(data.mth)
      data.num=parseInt(data.num)
      data.annee=parseInt(data.annee)
      data.duree=parseInt(data.duree)
      this.soc.nom=data.nom
      this.soc.adresse.num=data.num
      this.soc.adresse.rue=data.rue
      this.soc.adresse.ville=data.ville
      this.soc.adresse.codeP=data.codeP
      this.soc.mail=data.mail
      this.soc.tel=data.tel
      delete data.bd
      delete data.mth
      delete data.tech
      delete data.tech1
      delete data.tech2
delete data.nom
delete data.num
delete data.rue
delete data.ville
delete data.codeP
delete data.mail
delete data.tel
let etd=localStorage.getItem("id")?? 0 ;
etd=parseInt(etd.toString())
let nom=data.nom_proj
delete data.nom_proj
data.nom=nom
console.log(data)
console.log(this.soc)
console.log(etd)
this.req.soc=this.soc
this.req.proj=data
console.log(this.req)
        this.ds.addproj(this.req,tech,tech1,tech2,etd,this.bd,this.mth).subscribe(datat=>{
          let datarep=JSON.parse(JSON.stringify(datat))
          localStorage.setItem("projet",datarep.id)
        this.route.navigate(["/accueil",{m:1}])
       },(err:HttpErrorResponse)=>[
        this.message=err.error
       ]) 
   }
  }
  