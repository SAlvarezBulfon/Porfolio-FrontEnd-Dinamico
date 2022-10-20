import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  expURL ='https://portfolio-fofi.herokuapp.com/experiencia/';
  constructor(private HttpClient: HttpClient) { }




    // Métodos del CRUD

    //lISTA DE EXPERIENCIAS
    public getExp(): Observable<Experiencia[]> {
      return this.HttpClient.get<Experiencia[]>(this.expURL + 'puestos');
    }
  
  //añadir un experiencia
    public addExp(experiencia: Experiencia): Observable<any>{
      return this.HttpClient.post<any>(this.expURL + 'add', experiencia);
    }
  //editar un experiencia
    public editExp(id: number, experiencia: Experiencia): Observable<any>{
      return this.HttpClient.put<any>(this.expURL + `edit/${id}`, experiencia);
    }
  //eliminar un experiencia
    public deleteExp(id: number): Observable<any>{
      return this.HttpClient.delete<any>(this.expURL + `delete/${id}`);
    }
  //Devuelve un estudio
    public detailsExp(id: number): Observable<Experiencia> {
      return this.HttpClient.get<Experiencia>(this.expURL + `details/${id}`);
    }
    
    public setId(id: number){
      localStorage.setItem('id', id.toString());
    }
  
    public getId(){
      return localStorage.getItem('id');
    }
}
