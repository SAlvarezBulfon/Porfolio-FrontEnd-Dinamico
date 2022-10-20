import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Estudio } from 'src/app/models/estudio';
import { EstudioService } from 'src/app/service/estudio.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {
  estudio!: Estudio;
  title: string = '';
  time: string = '';
  description: string = '';
  editarEstudio: FormGroup;
  constructor(private estudioService: EstudioService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) { 

      this.editarEstudio =  this.fb.group({ 
        title: [''],
        time: [''],
        description: [''],
       })
    }

  ngOnInit(): void {
  }


  onUpdate():void{
    const estudio = new Estudio(this.title, this.time, this.description);
    this.estudioService.editEstudio(parseInt(this.estudioService.getId()!), this.editarEstudio.value).subscribe(data => {
      this.toastr.success('Formación académica editada correctamente','OK', {
        timeOut: 3000,
      }); window.location.reload();
    }, err => {
      this.toastr.error(err.error.mensaje,'No se pudo editar la formación académica', {
        timeOut: 3000,
      });
    } );
  }
}
