import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    constructor(private http: HttpClient) { }

    private API_USUARIO = "https://randomuser.me/api/?results=24"

    //GET
    getUsuarios(): Observable<any>{
      return this.http.get(this.API_USUARIO )
    }


}
