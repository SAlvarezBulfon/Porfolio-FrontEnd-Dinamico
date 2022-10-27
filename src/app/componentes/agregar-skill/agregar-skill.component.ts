import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Hardskill } from 'src/app/models/hardskill';
import { HardskillService } from 'src/app/service/hardskill.service';

@Component({
  selector: 'app-agregar-skill',
  templateUrl: './agregar-skill.component.html',
  styleUrls: ['./agregar-skill.component.css']
})
export class AgregarSkillComponent implements OnInit {
  nombre: string ='';
  porcentaje:number = 0;
  constructor(private hardSkillService: HardskillService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const skill = new Hardskill(this.nombre, this.porcentaje);
    this.hardSkillService.addHardSkill(skill).subscribe(data => {
      this.toastr.success('HardSkill creada correctamente','OK', {
        timeOut: 3000,
      });window.location.reload();
      this.router.navigate(['/hardskill']);
    }, err => {
      this.toastr.error(err.error.mensaje,'Fail', {
        timeOut: 3000,
      });window.location.reload();
      this.router.navigate(['/hardskill']);
    } );
  }
}
