import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Estudio } from 'src/app/models/estudio';
import { EstudioService } from 'src/app/service/estudio.service';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {
  title: string ='';
  time:string ='';
  description : string ='';
  constructor(private estudioService: EstudioService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }


  onCreate():void{
    const estudio = new Estudio(this.title, this.time, this.description);
    this.estudioService.addEstudio(estudio).subscribe(data => {
      this.toastr.success('Formación académica creada correctamente','OK', {
        timeOut: 3000,
      });window.location.reload();
      this.router.navigate(['/estudio']);
    }, err => {
      this.toastr.error(err.error.mensaje,'No se pudo crear la sección', {
        timeOut: 3000,
      });window.location.reload();
      this.router.navigate(['/estudio']);
    } );
  }
}
