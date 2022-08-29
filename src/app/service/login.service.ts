import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  admin?: boolean = false ;
  constructor() { }

  setAdmin(admin: boolean){
    this.admin = admin;
  }
  getAdmin(): boolean{
    return this.admin!;
  }
}
