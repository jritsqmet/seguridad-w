import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email:any
  password:any

  servicio = inject(LoginService)

  login( datos : any){
    this.servicio.postLogin( datos.value).subscribe( p =>{
      if( p.accessToken != '' ){
        sessionStorage.setItem('login', 'true')
        location.href = ''
      }
    } )
  }



}
