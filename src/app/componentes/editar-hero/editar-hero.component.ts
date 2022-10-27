import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Perfil } from 'src/app/models/perfil';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'app-editar-hero',
  templateUrl: './editar-hero.component.html',
  styleUrls: ['./editar-hero.component.css']
})
export class EditarHeroComponent implements OnInit {
  perfil!: Perfil;
  nombre:string ='';
  puesto:string ='';
  editarPerfil: FormGroup;
  constructor(    private perfilService: PerfilService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute, 
    private fb: FormBuilder) {

      this.editarPerfil =  this.fb.group({ 
        nombre: [''],
        puesto: [''],
       })
     }

  ngOnInit(): void {
  }

  
  onUpdate():void{
    const perfil = new Perfil(this.nombre, this.puesto);
    this.perfilService.editPerfil(parseInt(this.perfilService.getId()!) , this.editarPerfil.value).subscribe(data => {
      this.toastr.success('Perfil editado correctamente','OK', {
        timeOut: 3000,
      }); window.location.reload();
    }, err => {
      this.toastr.error(err.error.mensaje,'No se pudo editar la sección', {
        timeOut: 3000,
      });window.location.reload();
    } );
  }
}
