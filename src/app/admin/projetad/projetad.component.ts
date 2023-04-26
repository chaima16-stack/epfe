import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-projetad',
  templateUrl: './projetad.component.html',
  styleUrls: ['./projetad.component.css']
})
export class ProjetadComponent implements OnInit{
  dataArray : any=[ ]
  
  data1:any
  ms:any;
  m:any
  constructor(private share:DataService, private route :ActivatedRoute){
    this.share.getAllproj().subscribe(data=>{
      this.dataArray= data;
      console.log(data);
    })
  }
    ngOnInit(): void {
      this.share.getAllproj().subscribe(data=>{
        this.dataArray= data;
        console.log(data);
      })
    }


   refrech(){
    this.share.getAllproj().subscribe(data=>{
      this.dataArray= data;})
  }
 
 delete(id:number){
  this.share.deleteproj(id).subscribe(response=>{
    console.log(response)
    this.data1=response
   // this.m=this.data1.msg
    this.refrech()
  })
    
}
}
