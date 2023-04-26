import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../admin/service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  m:any
  dataArray : any=[ ]
  dataf: any=[ ]
  constructor(private ads:LoginService,private route:Router,private route1:ActivatedRoute,private share:DataService) { }

  ngOnInit(): void {
this.share.getAllgrp().subscribe(response=>
  {
    console.log(response)
this.dataArray=response
  })
  this.share.getAllformation().subscribe(response=>
    {console.log(response)
  this.dataf=response
    })
    this.route1.params
    .subscribe(params => {
        this.m=params['m'];
      //   this.m=Object.values(JSON.parse(this.m))
      
      console.log(this.m); 
    }
  ); 
  }

register(f:any){
  let data=f.value
  console.log(data)
  let idgrp=parseInt(data.grp )
  let idfor=parseInt(data.formation)
  delete data.grp 
  delete data.formation
  console.log(idgrp)
  this.ads.register(data,idgrp,idfor).subscribe(response=>{
    console.log(response)
    if (response==null)
{
    this.route.navigate(['/register',{m:-1}]);}
    else {
    this.route.navigate(['/login',{m:2}]);}
  })  
}
}
