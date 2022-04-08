import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  navbarOpen: Boolean | undefined;

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
    toggleNavbar() {this.navbarOpen = !this.navbarOpen;}
  
}
