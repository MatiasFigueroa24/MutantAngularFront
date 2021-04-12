import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { List } from '../Modelo/List';
import { Observable } from 'rxjs';

const cabecers = {headers: new HttpHeaders({'Content-TYpe': 'application/json'})};

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
 
  Url: string =' http://localhost:8081/v1/';
  
constructor(private http: HttpClient) {}

 /* getAll(): Observable<Persona[]>{
    
    return this.http.get<Persona[]>(this.miUrl);
      }
    */
  
  getList(): Observable<List> { 
    return this.http.get<List>(this.Url+'stats',cabecers)
  }
   
  Crear(add:List){   
   return this.http.post<List>(this.Url+'mutant',add,cabecers);
  }
}
