import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[] = [];
  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.cargarProyectos();
  }
  cargarProyectos(){
    this.proyectoService.getProjects().subscribe(data => {
      this.proyectos = data;
    }, err => {
      console.log(err);
    } );
  }
}
