import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  proyectoURL = 'http://localhost:3000/proyectos/';

  constructor(private HttpClient: HttpClient) { }

  public getProjects(): Observable<Proyecto[]> {
    return this.HttpClient.get<Proyecto[]>(this.proyectoURL + 'getProjects');
  }

  public addProject(proyecto: Proyecto): Observable<any>{
    return this.HttpClient.post<any>(this.proyectoURL + 'new', 
    proyecto)
  }

  public editProject(id: number, proyecto: Proyecto): Observable<any>{
    return this.HttpClient.put<any>(this.proyectoURL + `edit/${id}`, proyecto);
  }

  public deleteProject(id: number): Observable<any>{
    return this.HttpClient.delete<any>(this.proyectoURL + `delete/${id}`);
  }

  public detailsProject(id: number): Observable<Proyecto> {
    return this.HttpClient.get<Proyecto>(this.proyectoURL + `details/${id}`);
  }
  public updateProject(id: number, proyecto: Proyecto): Observable<any>{
    return this.HttpClient.put<any>(this.proyectoURL + `update/${id}`, proyecto);
  }
}
