import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/models/about';
import { AboutService } from 'src/app/service/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  admin:any;
  about: About[] = [];
  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.cargarAbout();
    this.admin = localStorage.getItem('admin');
  }

  cargarAbout():void{
    this.aboutService.lista().subscribe(
      data => {
        this.about = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  setearId(id: number){
    this.aboutService.setId(id);
  }
}
