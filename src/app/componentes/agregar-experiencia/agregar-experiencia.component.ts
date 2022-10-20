import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {
  title: string ='';
  time:string ='';
  description : string ='';
  constructor(private experienciaService: ExperienciaService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }


  onCreate():void{
    const experiencia = new Experiencia(this.title, this.time, this.description);
    this.experienciaService.addExp(experiencia).subscribe(data => {
      this.toastr.success('Experiencia laboral creada correctamente','OK', {
        timeOut: 3000,
      });window.location.reload();
      this.router.navigate(['/experiencia']);
    }, err => {
      this.toastr.error(err.error.mensaje,'No se pudo crear la sección', {
        timeOut: 3000,
      });window.location.reload();
      this.router.navigate(['/experiencia']);
    } );
  }
}
