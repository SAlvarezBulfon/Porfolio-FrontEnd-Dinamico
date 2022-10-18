import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  admin?: boolean;
  username?: string;
  password?: string;
  constructor(private login: LoginService,
    private fb: FormBuilder) {
     }

  ngOnInit(): void {
  }

  loginUser(){
    if(this.username== 'admin' && this.password== 'admin'){
      this.admin = true;
      localStorage.setItem('admin', '1');
      console.log(this.username, this.login.getAdmin());
      window.location.reload();
    }else{
      this.admin = false;
      localStorage.setItem('admin', '0');
      window.location.reload();
    }
  }


}
