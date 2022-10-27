import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  skillURL = 'https://portfolio-fofi.herokuapp.com/softskill/'
  constructor(private httpClient: HttpClient) { }


    //MÉTODOS DEL BACKEND
  //Devuelve el skill
  public lista(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.skillURL + 'description');
  }

  //añadir un skill
  public addSkill(skill: Skill): Observable<any>{
    return this.httpClient.post<any>(this.skillURL + 'create', skill);
  }
  //editar un skill
  public editSkill(id: number, skill: Skill): Observable<any>{
    return this.httpClient.put<any>(this.skillURL + `edit/${id}`, skill);
  }
  //eliminar un skill
  public deleteSkill(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.skillURL + `delete/${id}`);
  }
  public setId(id: number){
    localStorage.setItem('id', id.toString());
  }

  public getId(){
    return localStorage.getItem('id');
  }
}
