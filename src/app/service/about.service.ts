import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../models/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  aboutURL = 'https://portfolio-fofi.herokuapp.com/about/'
  constructor(private httpClient: HttpClient) { }

  //MÉTODOS DEL BACKEND
  //Devuelve el about
  public lista(): Observable<About[]> {
    return this.httpClient.get<About[]>(this.aboutURL + 'description');
  }

  //añadir un about
  public addAbout(about: About): Observable<any>{
    return this.httpClient.post<any>(this.aboutURL + 'create', about);
  }
  //editar un about
  public editAbout(id: number, about: About): Observable<any>{
    return this.httpClient.put<any>(this.aboutURL + `edit/${id}`, about);
  }
  //eliminar un about
  public deleteAbout(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.aboutURL + `delete/${id}`);
  }
}
