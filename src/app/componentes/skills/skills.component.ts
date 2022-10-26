import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Hardskill } from 'src/app/models/hardskill';
import { HardskillService } from 'src/app/service/hardskill.service';
//para las barras de progreso
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  admin:any;
  hardskill: any;
  constructor(private hardskillService: HardskillService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cargarHardSkill();
  }

  cargarHardSkill(){
    this.hardskillService.getEstudios().subscribe(
      data => {
        this.hardskill = data;
      }, err => {
        console.log(err);
      });
  }

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  bufferValue = 75;

  get style(){
    return 'width' + this.hardskill.porcentaje + '%'
  }

}
