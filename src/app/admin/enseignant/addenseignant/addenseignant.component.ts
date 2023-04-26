import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import {Router} from'@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-addenseignant',
  templateUrl: './addenseignant.component.html',
  styleUrls: ['./addenseignant.component.css']
})
export class AddenseignantComponent implements OnInit {
message=""
dataArray:any=[ ]
  constructor(private ds:DataService,private route:Router){

  }
ngOnInit(): void {
  this.ds.getAlltech().subscribe(response=>
    {
      console.log(response)
  this.dataArray=response
    })
}
 add(F:any){
    let data=F.value
    console.log(data)
    data.tech1=parseInt(data.tech1)
    data.tech2=parseInt(data.tech2)
    data.tech3=parseInt(data.tech3)
     this.ds.add(data,data.tech1,data.tech2,data.tech3).subscribe(datat=>{
      this.route.navigate(["/admin/enseignants"])
     },(err:HttpErrorResponse)=>[
      this.message=err.error
     ])
 }
}
