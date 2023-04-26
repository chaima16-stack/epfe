import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { ParseError } from '@angular/compiler';
import { DataService } from '../admin/service/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
datalog:any
m:any

datares:any=[ ]
  constructor(private share:LoginService,private ads :DataService, private route :Router,private route1:ActivatedRoute){}
  ngOnInit(): void {
    this.route1.params
    .subscribe(params => {
        this.m=params['m'];
      //   this.m=Object.values(JSON.parse(this.m))
      
      console.log(this.m); 
    }
  ); 
  }

id:any
  login(f:any){
    let idproj:any
    let data=f.value
   let email=data.mail
   this.share.login(data.mail,data.password).subscribe(data=>{
    this.id=parseInt(data.toString())
      this.share.cnx(parseInt(data.toString())).subscribe(data1=>{





        if(email=='admin@admin.com'){
          this.share.SaveDataProfil(this.id,'Admin',0)
          this.route.navigate(['/admin/enseignants']);
       
       
        }
         
          else if(data1=='Etudiant'){
          this.ads.getAlletd().subscribe(res=>{
       this.datares=res
      console.log(this.datares)

      for(let i of this.datares){
        if(i.id==this.id){
          if(i.proj!=null){
            idproj=i.proj.id
            console.log(idproj)
          }
       
          break;
        }
        
     
     
   }
   this.share.SaveDataProfil(this.id,'Etudiant',idproj)
  if( localStorage.getItem("projet")=="undefined")
   this.route.navigate(['/accueil'])
   else this.route.navigate(['/accueil',{m:1}])
     })
    
   
      

         

           
          }else  if (data1=='Enseignant'  ){
            this.share.SaveDataProfil(this.id,data1,0)
            this.route.navigate(['/admin/enseignants']);}
          
          
          else this.route.navigate(['/login',{m:-1}]);
      });
   
   })


  }

  logout(){
    localStorage.removeItem('id')
    localStorage.removeItem('role')
   
    localStorage.setItem('islogin','0')
    this.share.isLoginIn=false
    this.route.navigate(['/login'])
  }
      

}
