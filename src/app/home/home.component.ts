import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  m=0;
constructor(private route1:ActivatedRoute){}
  ngOnInit(): void {
    this.route1.params
    .subscribe(params => {
        this.m=params['m'];
      //   this.m=Object.values(JSON.parse(this.m))
      
      console.log(this.m); 
    }
  ); 
  }
}
