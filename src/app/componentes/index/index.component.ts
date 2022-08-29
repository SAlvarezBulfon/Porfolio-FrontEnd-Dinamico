import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  proyectos: Proyecto[] = [];
  admin?: boolean = false;
  constructor(private login: LoginService) { }

  ngOnInit(): void {
    this.admin = this.login.getAdmin();
  }
}
