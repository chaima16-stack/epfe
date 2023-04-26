import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent  implements OnInit {
  dataArray : any=[ ]
  datagpr={
    id:0,
    nom:''
    
  }
  data1:any
  ms:any;
  m:any
  constructor(private share:DataService, private route :ActivatedRoute){
    this.share.getAllgrp().subscribe(data=>{
      this.dataArray= data;
      console.log(data);
    })
  }
    ngOnInit(): void {
      this.share.getAllgrp().subscribe(data=>{
        this.dataArray= data;
        console.log(data);
      })
    }


    getdata(id:number,nom:string){
      this.datagpr.id=id;
      this.datagpr.nom=nom;
     
      console.log(this.datagpr)
   }
   refrech(){
    this.share.getAllgrp().subscribe(data=>{
      this.dataArray= data;})
  }
 update(f:any){
   let data=f.value
   this.share.updategpr(this.datagpr.id,data).subscribe(response=>{
   this.ms=1
     console.log(response)
     this.refrech()
   })
 }
 delete(id:number){
  this.share.deletegpr(id).subscribe(response=>{
    console.log(response)
    this.data1=response
   // this.m=this.data1.msg
    this.refrech()
  })
    
}
}
