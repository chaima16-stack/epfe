import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../admin/service/data.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {
  message=""
  m:any
  dataArray:any =[]
  constructor(private ds:DataService,private route:Router){

  }
ngOnInit(): void {
  
}
 add(F:any){
  let proj:any
    let data1=F.value
    data1=JSON.parse(JSON.stringify(data1))
    console.log(data1)
    this.ds.getAllproj().subscribe(data=>{
      this.dataArray= data;
      let idp:number
      let idd=localStorage.getItem("projet")
      if (idd!=null){
        idp=parseInt(idd)
        for(let i of this.dataArray){
          if(i.id==idp){
             proj=i;
             break;
          }
        }
        
      }

   console.log(proj)
      proj.rapport=data1.rapport 
      proj.video=data1.video
      this.ds.adddepot(proj).subscribe(datat=>{
        this.route.navigate(["/accueil",{m:2}])
       },(err:HttpErrorResponse)=>[
        this.message=err.error
       ])
    
    })
     
 }
}
