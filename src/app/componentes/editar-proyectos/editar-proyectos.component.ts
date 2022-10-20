import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {
  proyecto!: Proyecto;
  name: string ='';
  description:string ='';
  url_image : string ='';
  url_sourceCode :string ='';
  editarProyecto: FormGroup;
  constructor(private proyectoService: ProyectoService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) {
     this.editarProyecto =  this.fb.group({ 
      name: [''],
      description: [''],
      url_image: [''],
      url_sourceCode: ['']
     })
     }

  ngOnInit(): void {
    
  }

  onUpdate():void{
    const proyecto = new Proyecto(this.name, this.description, this.url_image, this.url_sourceCode);
    this.proyectoService.editProject(parseInt(this.proyectoService.getId()!), this.editarProyecto.value).subscribe(data => {
      this.toastr.success('Proyecto editado correctamente','OK', {
        timeOut: 3000,
      }); window.location.reload();
    }, err => {
      this.toastr.error(err.error.mensaje,'No se pudo editar el proyecto', {
        timeOut: 3000,
      });window.location.reload();
    } );
  }
}
