import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AboutService } from 'src/app/service/about.service';

@Component({
  selector: 'app-editar-about',
  templateUrl: './editar-about.component.html',
  styleUrls: ['./editar-about.component.css']
})
export class EditarAboutComponent implements OnInit {

  constructor(    private aboutService: AboutService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute) {
   }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    alert(id);
  }

}
