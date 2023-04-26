import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-methode-conception',
  templateUrl: './methode-conception.component.html',
  styleUrls: ['./methode-conception.component.css']
})
export class MethodeConceptionComponent  implements OnInit {
  dataArray : any=[ ]
  datamc={
    id:0,
    nom:''
    
  }
  data1:any
  ms:any;
  m:any
  constructor(private share:DataService, private route :ActivatedRoute){
    this.share.getAllmc().subscribe(data=>{
      this.dataArray= data;
      console.log(data);
    })
  }
    ngOnInit(): void {
      this.share.getAllmc().subscribe(data=>{
        this.dataArray= data;
        console.log(data);
      })
    }


    getdata(id:number,nom:string){
      this.datamc.id=id;
      this.datamc.nom=nom;
     
      console.log(this.datamc)
   }
   refrech(){
    this.share.getAllmc().subscribe(data=>{
      this.dataArray= data;})
  }
 update(f:any){
   let data=f.value
   this.share.updatemc(this.datamc.id,data).subscribe(response=>{
   this.ms=1
     console.log(response)
     this.refrech()
   })
 }
 delete(id:number){
  this.share.deletemc(id).subscribe(response=>{
    console.log(response)
    this.data1=response
   // this.m=this.data1.msg
    this.refrech()
  })
    
}
}
