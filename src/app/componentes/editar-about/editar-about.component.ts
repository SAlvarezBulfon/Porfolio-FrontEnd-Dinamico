import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { About } from 'src/app/models/about';
import { AboutService } from 'src/app/service/about.service';

@Component({
  selector: 'app-editar-about',
  templateUrl: './editar-about.component.html',
  styleUrls: ['./editar-about.component.css']
})
export class EditarAboutComponent implements OnInit {
  about!: About;
  description1:string ='';
  description2:string ='';
  url_CV : string ='';
  editarAbout: FormGroup;
  constructor(    private aboutService: AboutService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute, 
    private fb: FormBuilder) {
      this.editarAbout =  this.fb.group({ 
        description1: [''],
        description2: [''],
        url_CV: [''],
       })
   }


  ngOnInit(): void {}


  onUpdate():void{
    const about = new About(this.description1, this.description2, this.url_CV);
    this.aboutService.editAbout( 3 , this.editarAbout.value).subscribe(data => {
      this.toastr.success('About editado correctamente','OK', {
        timeOut: 3000,
      }); window.location.reload();
    }, err => {
      this.toastr.error(err.error.mensaje,'No se pudo editar la sección', {
        timeOut: 3000,
      });window.location.reload();
    } );
  }
}
