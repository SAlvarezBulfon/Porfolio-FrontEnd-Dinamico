import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  experiencia!: Experiencia;
  title: string = '';
  time: string = '';
  description: string = '';
  editarExp: FormGroup;
  constructor(private experienciaService: ExperienciaService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.editarExp =  this.fb.group({ 
      title: [''],
      time: [''],
      description: [''],
     })
   }

  ngOnInit(): void {
  }

  
  onUpdate():void{
    const exp = new Experiencia(this.title, this.time, this.description);
    this.experienciaService.editExp(parseInt(this.experienciaService.getId()!), this.editarExp.value).subscribe(data => {
      this.toastr.success('Experiencia laboral editada correctamente','OK', {
        timeOut: 3000,
      }); window.location.reload();
    }, err => {
      this.toastr.error(err.error.mensaje,'No se pudo editar la experiencia laboral', {
        timeOut: 3000,
      });
    } );
  }
}
