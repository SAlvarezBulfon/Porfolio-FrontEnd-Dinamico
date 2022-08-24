import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  proyectoURL = 'http://localhost:8080/proyecto/';

  constructor(private HttpClient: HttpClient) { }

  //Devuelve todos los proyectos
  public getProjects(): Observable<Proyecto[]> {
    return this.HttpClient.get<Proyecto[]>(this.proyectoURL + 'proyectos');
  }

//añadir un proyecto
  public addProject(proyecto: Proyecto): Observable<any>{
    return this.HttpClient.post<any>(this.proyectoURL + 'create', proyecto);
  }
//editar un proyecto
  public editProject(id: number, proyecto: Proyecto): Observable<any>{
    return this.HttpClient.put<any>(this.proyectoURL + `edit/${id}`, proyecto);
  }
//eliminar un proyecto
  public deleteProject(id: number): Observable<any>{
    return this.HttpClient.delete<any>(this.proyectoURL + `delete/${id}`);
  }
//Devuelve un proyecto
  public detailsProject(id: number): Observable<Proyecto> {
    return this.HttpClient.get<Proyecto>(this.proyectoURL + `details/${id}`);
  }
  
}
