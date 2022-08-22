import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  proyectos: Proyecto[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
