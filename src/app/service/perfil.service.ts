import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from '../models/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  perfilURL = 'https://portfolio-fofi.herokuapp.com/perfil/'
  constructor(private httpClient: HttpClient) { }



  
  //MÉTODOS DEL BACKEND
  //Devuelve el perfil
  public lista(): Observable<Perfil[]> {
    return this.httpClient.get<Perfil[]>(this.perfilURL + 'datos');
  }

  //añadir un perfil
  public addPerfil(perfil: Perfil): Observable<any>{
    return this.httpClient.post<any>(this.perfilURL + 'create', perfil);
  }
  //editar un perfil
  public editPerfil(id: number, perfil: Perfil): Observable<any>{
    return this.httpClient.put<any>(this.perfilURL + `edit/${id}`, perfil);
  }
  //eliminar un perfil
  public deletePerfil(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.perfilURL + `delete/${id}`);
  }
  public setId(id: number){
    localStorage.setItem('id', id.toString());
  }

  public getId(){
    return localStorage.getItem('id');
  }
}
