import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.css']
})
export class SocieteComponent implements OnInit{
  dataArray : any=[ ]
  
  data1:any
  ms:any;
  m:any
  constructor(private share:DataService, private route :ActivatedRoute){
    this.share.getAllsoc().subscribe(data=>{
      this.dataArray= data;
      console.log(data);
    })
  }
    ngOnInit(): void {
      this.share.getAllsoc().subscribe(data=>{
        this.dataArray= data;
        console.log(data);
      })
    }


   refrech(){
    this.share.getAllsoc().subscribe(data=>{
      this.dataArray= data;})
  }
 
 delete(id:number){
  this.share.deletesoc(id).subscribe(response=>{
    console.log(response)
    this.data1=response
   // this.m=this.data1.msg
    this.refrech()
  })
    
}
}
