import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-addformation',
  templateUrl: './addformation.component.html',
  styleUrls: ['./addformation.component.css']
})
export class AddformationComponent implements OnInit {
  message=""

  constructor(private ds:DataService,private route:Router){

  }
ngOnInit(): void {
  
}
 add(F:any){
    let data=F.value
    console.log(data)
     this.ds.addfor(data).subscribe(datat=>{
      this.route.navigate(["/admin/formation"])
     },(err:HttpErrorResponse)=>[
      this.message=err.error
     ])
 }
}



