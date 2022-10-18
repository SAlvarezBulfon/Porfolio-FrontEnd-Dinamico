import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  admin?: any;
  constructor() { }

  ngOnInit(): void {
    this.admin = localStorage.getItem('admin');
  }
  logoutUser(){
    localStorage.setItem('admin', '0');
    window.location.reload();
  }
}
