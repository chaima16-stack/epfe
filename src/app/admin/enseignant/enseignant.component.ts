import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit{
  dataArray : any=[ ]
  dataArray1 : any=[ ]
  dataens={
    id:0,
    nom:'',
    prenom:'',
    mail:'',
    tel:0,
    specialite:'',
    mdp:'',
    tech:[ {
      id:0,
      nom:""
    },
    {
      id:0,
      nom:""
    },
    {
      id:0,
      nom:""
    }]
  }
  data1:any
  ms:any;
  m:any
  constructor(private share:DataService, private route :ActivatedRoute){
    this.share.getAll().subscribe(data=>{
      this.dataArray= data;
      console.log(data);
    })
  }
    ngOnInit(): void {
      this.share.getAll().subscribe(data=>{
        this.dataArray= data;
        console.log(data);
      })

      this.share.getAlltech().subscribe(response=>
        {
          console.log(response)
      this.dataArray1=response
        })
    }


    getdata(id:number,nom:string,prenom:string,mail:string,tel:number,mdp:string,specialite:string){
      this.dataens.id=id;
      this.dataens.nom=nom;
      this.dataens.prenom=prenom;
      this.dataens.mail=mail ;
      this.dataens.tel=tel ;
      this.dataens.mdp=mdp ;
      this.dataens.specialite=specialite;
      console.log(this.dataens)
   }
   refrech(){
    this.share.getAll().subscribe(data=>{
      this.dataArray= data;})
  }
 update(f:any){
   let data=f.value
   this.share.update(this.dataens.id,data).subscribe(response=>{
 this.ms=1
     console.log(response)
     this.refrech()
   })
 }
 delete(id:number){
  this.share.delete(id).subscribe(response=>{
    console.log(response)
    this.data1=response
   // this.m=this.data1.msg
    this.refrech()
  })
    
}
}
