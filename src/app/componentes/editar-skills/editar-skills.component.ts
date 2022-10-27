import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-editar-skills',
  templateUrl: './editar-skills.component.html',
  styleUrls: ['./editar-skills.component.css']
})
export class EditarSkillsComponent implements OnInit {
  skill!: Skill;
  description:string ='';
  editarSkill: FormGroup;
  constructor(   private skillService: SkillService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute, 
    private fb: FormBuilder) {

    this.editarSkill =  this.fb.group({ 
      description: [''],
     })
   }

  ngOnInit(): void {
  }

  onUpdate():void{
    const skill = new Skill(this.description);
    this.skillService.editSkill(parseInt(this.skillService.getId()!) , this.editarSkill.value).subscribe(data => {
      this.toastr.success('Softskill editadas correctamente','OK', {
        timeOut: 3000,
      }); window.location.reload();
    }, err => {
      this.toastr.error(err.error.mensaje,'No se pudo editar la sección', {
        timeOut: 3000,
      }); //window.location.reload();
    } );
  }
}
