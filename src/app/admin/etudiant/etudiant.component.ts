import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit{
  dataArray : any=[ ]
  
  data1:any
  ms:any;
  m:any
  constructor(private share:DataService, private route :ActivatedRoute){
    this.share.getAlletd().subscribe(data=>{
      this.dataArray= data;
      console.log(data);
    })
  }
    ngOnInit(): void {
      this.share.getAlletd().subscribe(data=>{
        this.dataArray= data;
        console.log(data);
      })
    }


   refrech(){
    this.share.getAlletd().subscribe(data=>{
      this.dataArray= data;})
  }
 
 delete(id:number){
  this.share.deleteetd(id).subscribe(response=>{
    console.log(response)
    this.data1=response
   // this.m=this.data1.msg
    this.refrech()
  })
    
}
}
