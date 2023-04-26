import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
    dataArray : any=[ ]
    datafor={
      id:0,
      nom:''
      
    }
    data1:any
    ms:any;
    m:any
    constructor(private share:DataService, private route :ActivatedRoute){
      this.share.getAllfor().subscribe(data=>{
        this.dataArray= data;
        console.log(data);
      })
    }
      ngOnInit(): void {
        this.share.getAllfor().subscribe(data=>{
          this.dataArray= data;
          console.log(data);
        })
      }
  
  
      getdata(id:number,nom:string){
        this.datafor.id=id;
        this.datafor.nom=nom;
       
        console.log(this.datafor)
     }
     refrech(){
      this.share.getAllfor().subscribe(data=>{
        this.dataArray= data;})
    }
   update(f:any){
     let data=f.value
     this.share.updatefor(this.datafor.id,data).subscribe(response=>{
     this.ms=1
       console.log(response)
       this.refrech()
     })
   }
   delete(id:number){
    this.share.deletefor(id).subscribe(response=>{
      console.log(response)
      this.data1=response
     // this.m=this.data1.msg
      this.refrech()
    })
      
  }
  }
  