import { Component , OnInit} from '@angular/core';
import { DataService } from '../../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-technologie',
  templateUrl: './technologie.component.html',
  styleUrls: ['./technologie.component.css']
})
export class TechnologieComponent implements OnInit {
  dataArray : any=[ ]
  datatech={
    id:0,
    nom:''
    
  }
  data1:any
  ms:any;
  m:any
  constructor(private share:DataService, private route :ActivatedRoute){
    this.share.getAlltech().subscribe(data=>{
      this.dataArray= data;
      console.log(data);
    })
  }
    ngOnInit(): void {
      this.share.getAlltech().subscribe(data=>{
        this.dataArray= data;
        console.log(data);
      })
    }


    getdata(id:number,nom:string){
      this.datatech.id=id;
      this.datatech.nom=nom;
     
      console.log(this.datatech)
   }
   refrech(){
    this.share.getAlltech().subscribe(data=>{
      this.dataArray= data;})
  }
 update(f:any){
   let data=f.value
   this.share.updatetech(this.datatech.id,data).subscribe(response=>{
   this.ms=1
     console.log(response)
     this.refrech()
   })
 }
 delete(id:number){
  this.share.deletetech(id).subscribe(response=>{
    console.log(response)
    this.data1=response
   // this.m=this.data1.msg
    this.refrech()
  })
    
}
}

