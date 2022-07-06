import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  navbarOpen: Boolean | undefined;

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
    toggleNavbar() {this.navbarOpen = !this.navbarOpen;}

}
