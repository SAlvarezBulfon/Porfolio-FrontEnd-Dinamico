import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[] = [];
  constructor(private proyectoService: ProyectoService,
    private toastr: ToastrService) { }

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

  borrar(id: number){
    this.proyectoService.deleteProject(id).subscribe(data => {
      this.toastr.success('Proyecto eliminado correctamente','OK', {
        timeOut: 3000,
      });
      this.cargarProyectos();
    } , err => {
      this.toastr.error(err.error.mensaje,'Fail', {
        timeOut: 3000,
      });
    } );
  }
}
