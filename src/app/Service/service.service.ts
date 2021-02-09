import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { List } from '../Modelo/List';
import { Observable } from 'rxjs';
import { Add } from '../Modelo/Add';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  Url: string ='/v1/stats';
  AddUrl: string ='/v1/mutant';
constructor(private http: HttpClient) {}

 /* getAll(): Observable<Persona[]>{
    
    return this.http.get<Persona[]>(this.miUrl);
      }
    */
  
  getList(): Observable<List[]> {
    console.log(this.Url);
    
    console.log(List)

    return this.http.get<List[]>(this.Url)
  }
 
  mostrar(){
    console.log(List)
  }
  
  getCrear(add:Add){
   return this.http.post<Add>(this.AddUrl,add);
  }
}
