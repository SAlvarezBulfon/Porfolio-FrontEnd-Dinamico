import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Estudio } from 'src/app/models/estudio';
import { Experiencia } from 'src/app/models/experiencia';
import { EstudioService } from 'src/app/service/estudio.service';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-educacion-experiencia',
  templateUrl: './educacion-experiencia.component.html',
  styleUrls: ['./educacion-experiencia.component.css']
})
export class EducacionExperienciaComponent implements OnInit {
  admin:any;
  estudios: Estudio[] = [];
  experiencia: Experiencia[] = [];
  constructor(private experienciaService: ExperienciaService,
    private estudioService: EstudioService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cargarEstudios();
    this.cargarExperiencia();
    console.log(this.admin);
    this.admin = localStorage.getItem('admin');
  }

  cargarEstudios(){
    this.estudioService.getEstudios().subscribe(
      data => {
        this.estudios = data.reverse();
      }, err => {
        console.log(err);
      });
  }

  cargarExperiencia(){
    this.experienciaService.getExp().subscribe(
      data => {
        this.experiencia = data.reverse();
      }, err => {
        console.log(err);
      });
  }

  borrarExp(id: number){
    this.experienciaService.deleteExp(id).subscribe(data => {
      this.toastr.success('Experiencia laboral eliminada correctamente','OK', {
        timeOut: 3000,
      });
      this.cargarExperiencia();
    } , err => {
      this.toastr.error(err.error.mensaje,'No se pudo eliminar la sección', {
        timeOut: 3000,
      });
    } );
  }

  borrarEstudio(id: number){
    this.estudioService.deleteEstudio(id).subscribe(data => {
      this.toastr.success('Formación académica eliminada correctamente','OK', {
        timeOut: 3000,
      });
      this.cargarEstudios();
    } , err => {
      this.toastr.error(err.error.mensaje,'No se pudo eliminar la sección', {
        timeOut: 3000,
      });
    } );
  }

  setearIdExp(id: number){
    this.estudioService.setId(id);
  }
}
