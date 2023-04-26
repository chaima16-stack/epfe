import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-addgroupe',
  templateUrl: './addgroupe.component.html',
  styleUrls: ['./addgroupe.component.css']
})
export class AddgroupeComponent implements OnInit {
  message=""

  constructor(private ds:DataService,private route:Router){

  }
ngOnInit(): void {
  
}
 add(F:any){
    let data=F.value
    console.log(data)
     this.ds.addgpr(data).subscribe(datat=>{
      this.route.navigate(["/admin/groupe"])
     },(err:HttpErrorResponse)=>[
      this.message=err.error
     ])
 }
}
