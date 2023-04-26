import { HttpErrorResponse } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-addmc',
  templateUrl: './addmc.component.html',
  styleUrls: ['./addmc.component.css']
})
export class AddmcComponent implements OnInit {
  message=""

  constructor(private ds:DataService,private route:Router){

  }
ngOnInit(): void {
  
}
 add(F:any){
    let data=F.value
    console.log(data)
     this.ds.addmc(data).subscribe(datat=>{
      this.route.navigate(["/admin/mc"])
     },(err:HttpErrorResponse)=>[
      this.message=err.error
     ])
 }
}



