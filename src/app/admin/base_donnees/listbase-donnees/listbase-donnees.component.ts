import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-listbase-donnees',
  templateUrl: './listbase-donnees.component.html',
  styleUrls: ['./listbase-donnees.component.css']
})
export class ListbaseDonneesComponent implements OnInit {
  dataArray : any=[ ]
  databd={
    id:0,
    nom:''
    
  }
  data1:any
  ms:any;
  m:any
  constructor(private share:DataService, private route :ActivatedRoute){
    this.share.getAllbd().subscribe(data=>{
      this.dataArray= data;
      console.log(data);
    })
  }
    ngOnInit(): void {
      this.share.getAllbd().subscribe(data=>{
        this.dataArray= data;
        console.log(data);
      })
    }


    getdata(id:number,nom:string){
      this.databd.id=id;
      this.databd.nom=nom;
     
      console.log(this.databd)
   }
   refrech(){
    this.share.getAllbd().subscribe(data=>{
      this.dataArray= data;})
  }
 update(f:any){
   let data=f.value
   this.share.updatebd(this.databd.id,data).subscribe(response=>{
   this.ms=1
     console.log(response)
     this.refrech()
   })
 }
 delete(id:number){
  this.share.deletebd(id).subscribe(response=>{
    console.log(response)
    this.data1=response
   // this.m=this.data1.msg
    this.refrech()
  })
    
}
}
