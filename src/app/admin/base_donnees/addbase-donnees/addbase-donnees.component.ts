import { HttpErrorResponse } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-addbase-donnees',
  templateUrl: './addbase-donnees.component.html',
  styleUrls: ['./addbase-donnees.component.css']
})
export class AddbaseDonneesComponent implements OnInit {
  message=""

  constructor(private ds:DataService,private route:Router){

  }
ngOnInit(): void {
  
}
 add(F:any){
    let data=F.value
    console.log(data)
     this.ds.addbd(data).subscribe(datat=>{
      this.route.navigate(["/admin/bd"])
     },(err:HttpErrorResponse)=>[
      this.message=err.error
     ])
 }
}
