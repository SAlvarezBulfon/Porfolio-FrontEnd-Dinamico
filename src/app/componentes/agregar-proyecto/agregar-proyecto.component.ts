
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {
  name: string ='';
  description:string ='';
  url_image : string ='';
  url_sourceCode :string ='';
  constructor(private proyectoService: ProyectoService,
    private toastr: ToastrService,
    private router: Router) { }


  ngOnInit(): void {
  }

  onCreate():void{
    const proyecto = new Proyecto(this.name, this.description, this.url_image, this.url_sourceCode);
    this.proyectoService.addProject(proyecto).subscribe(data => {
      this.toastr.success('Proyecto creado correctamente','OK', {
        timeOut: 3000,
      });
      this.router.navigate(['/proyectos']);
    }, err => {
      this.toastr.error(err.error.mensaje,'Fail', {
        timeOut: 3000,
      });
      this.router.navigate(['/proyectos']);
    } );
  }
}
