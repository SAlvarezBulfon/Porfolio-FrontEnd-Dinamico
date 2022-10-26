import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hardskill } from '../models/hardskill';

@Injectable({
  providedIn: 'root'
})
export class HardskillService {
  hardskillURL ='https://portfolio-fofi.herokuapp.com/hardskill/';
  constructor(private HttpClient: HttpClient) { }

    // Métodos del CRUD

    //lISTA DE ESTUDIOS
    public getEstudios(): Observable<Hardskill[]> {
      return this.HttpClient.get<Hardskill[]>(this.hardskillURL + 'lista');
    }
  
  //añadir un estudio
    public addEstudio(hardskill: Hardskill): Observable<any>{
      return this.HttpClient.post<any>(this.hardskillURL + 'add', hardskill);
    }

  //eliminar un estudio
    public deleteEstudio(id: number): Observable<any>{
      return this.HttpClient.delete<any>(this.hardskillURL + `delete/${id}`);
    }
  //Devuelve un estudio
    public detailsEstudio(id: number): Observable<Hardskill> {
      return this.HttpClient.get<Hardskill>(this.hardskillURL + `details/${id}`);
    }
    
    public setId(id: number){
      localStorage.setItem('id', id.toString());
    }
  
    public getId(){
      return localStorage.getItem('id');
    }
}
