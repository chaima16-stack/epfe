import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
constructor(private share:LoginService,private route:Router){}
  ngOnInit(): void {
    
  }
  logout(){
    localStorage.removeItem('id')
    localStorage.removeItem('role')
    localStorage.setItem('islogin','0')
    this.share.isLoginIn=false
    this.route.navigate(['/login'])
  }
}
