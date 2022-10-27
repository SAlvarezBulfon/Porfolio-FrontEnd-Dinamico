import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  admin:any;
  perfil: Perfil[] = [];
  constructor(private perfilService: PerfilService) { }

  ngOnInit(): void {
    this.cargarPerfil();
    this.admin = localStorage.getItem('admin');
  }

  cargarPerfil():void{
    this.perfilService.lista().subscribe(
      data => {
        this.perfil = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  setearId(id: number){
    this.perfilService.setId(id);
  }
}
