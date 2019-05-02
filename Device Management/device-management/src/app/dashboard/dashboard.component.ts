import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


  onView(){
    // alert("Clicked");
    this.router.navigate(['view']);
  }
  onAdd(){
    // alert("Clicked");
    this.router.navigate(['add']);
  }
  onUpdate(){
    // alert("Clicked");
    this.router.navigate(['update']);
  }
  onDelete(){
    // alert("Clicked");
    this.router.navigate(['delete']);
  }
}
