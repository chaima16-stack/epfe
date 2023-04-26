import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  constructor(private share:LoginService,private route:Router){}
    ngOnInit(): void {
      
    }
    logout(){
      localStorage.removeItem('id')
      localStorage.removeItem('role')
      localStorage.removeItem('projet')
      localStorage.setItem('islogin','0')
      this.share.isLoginIn=false
      this.route.navigate(['/login'])
    }
  }