import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  email:any
  password:any
  nick:any

  servicio = inject(LoginService)

  registrar( datos: any ){
    this.servicio.postRegistro( datos.value).subscribe()
    location.href= 'login'
  }


}
