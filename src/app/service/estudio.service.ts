import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../models/estudio';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {
  estudioURL ='https://portfolio-fofi.herokuapp.com/estudio/';
  constructor(private HttpClient: HttpClient) { }


  // Métodos del CRUD

    //lISTA DE ESTUDIOS
    public getEstudios(): Observable<Estudio[]> {
      return this.HttpClient.get<Estudio[]>(this.estudioURL + 'estudios');
    }
  
  //añadir un estudio
    public addEstudio(estudio: Estudio): Observable<any>{
      return this.HttpClient.post<any>(this.estudioURL + 'add', estudio);
    }
  //editar un estudio
    public editEstudio(id: number, estudio: Estudio): Observable<any>{
      return this.HttpClient.put<any>(this.estudioURL + `edit/${id}`, estudio);
    }
  //eliminar un estudio
    public deleteEstudio(id: number): Observable<any>{
      return this.HttpClient.delete<any>(this.estudioURL + `delete/${id}`);
    }
  //Devuelve un estudio
    public detailsEstudio(id: number): Observable<Estudio> {
      return this.HttpClient.get<Estudio>(this.estudioURL + `details/${id}`);
    }
    
    public setId(id: number){
      localStorage.setItem('id', id.toString());
    }
  
    public getId(){
      return localStorage.getItem('id');
    }
}
