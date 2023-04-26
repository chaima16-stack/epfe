import { HttpErrorResponse } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-addtechnologie',
  templateUrl: './addtechnologie.component.html',
  styleUrls: ['./addtechnologie.component.css']
})
export class AddtechnologieComponent implements OnInit {
  message=""

  constructor(private ds:DataService,private route:Router){

  }
ngOnInit(): void {
  
}
 add(F:any){
    let data=F.value
    console.log(data)
     this.ds.addtech(data).subscribe(datat=>{
      this.route.navigate(["/admin/technologie"])
     },(err:HttpErrorResponse)=>[
      this.message=err.error
     ])
 }
}



