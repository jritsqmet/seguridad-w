import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http:HttpClient) { }

  /// LOGIN
  private API_ADMIN= 'http://localhost:3000/login'

  postLogin( user : any):Observable<any>{
    return this.http.post(this.API_ADMIN,user )
  }

  ///REGISTRO
  private API_REGISTRO= 'http://localhost:3000/users'

  postRegistro( user : any):Observable<any>{
    return this.http.post(this.API_REGISTRO,user )
  }


}
