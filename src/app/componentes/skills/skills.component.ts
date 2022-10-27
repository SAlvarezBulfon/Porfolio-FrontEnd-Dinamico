import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Hardskill } from 'src/app/models/hardskill';
import { HardskillService } from 'src/app/service/hardskill.service';
//para las barras de progreso
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  admin:any;
  hardskill: any;
  skill: any;
  constructor(private hardskillService: HardskillService,
    private skillService: SkillService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cargarHardSkill();
    this.cargarSkill();
    this.admin = localStorage.getItem('admin');
  }

  cargarHardSkill(){
    this.hardskillService.getHardSkills().subscribe(
      data => {
        this.hardskill = data;
      }, err => {
        console.log(err);
      });
  }

  cargarSkill(){
    this.skillService.lista().subscribe(
      data => {
        this.skill = data;
      }, err => {
        console.log(err);
      });
  }

  setearId(id: number){
    this.skillService.setId(id);
  }


  borrar(id: number){
    this.hardskillService.deleteHardSkill(id).subscribe(data => {
      this.toastr.success('Hard skill eliminada correctamente','OK', {
        timeOut: 3000,
      });
      this.cargarHardSkill();
    } , err => {
      this.toastr.error(err.error.mensaje,'No se pudo eliminar', {
        timeOut: 3000,
      });
    } );
  }
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  bufferValue = 75;

  get style(){
    return 'width' + this.hardskill.porcentaje + '%'
  }

}
