import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../admin/service/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-binome',
  templateUrl: './binome.component.html',
  styleUrls: ['./binome.component.css']
})
export class BinomeComponent implements OnInit{
  dataArray : any=[ ]
  dataArray1 : any=[ ]
  dataetd: any=[ ]
  message:any
  data1:any
  ms:any;
  m:any
  constructor(private share:DataService, private route :ActivatedRoute ,private route1:Router){
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

    add(F:any){
      let proj:any
      let etd:any
        let data1=F.value
        data1=JSON.parse(JSON.stringify(data1))
        console.log(data1)
        this.share.getAllproj().subscribe(data3=>{
          this.dataArray1= data3;
          let idp:number
          let idd=localStorage.getItem("projet")
          if (idd!=null){
            idp=parseInt(idd)
            for(let i of this.dataArray1){
              if(i.id==idp){
                 proj=i;
                 break;
              }
            }
            
          }
    
       console.log(proj)
     
       
         this.share.addbinome(data1.etd,proj).subscribe(datat=>{
          this.route1.navigate(["/accueil",{m:3}])
         },(err:HttpErrorResponse)=>[
          this.message=err.error
         ]) 
      

      })


  
         
     }

  }