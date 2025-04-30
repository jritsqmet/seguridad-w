import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  email: any
  password: any
  nick: any

  servicio = inject(LoginService)

  registrar(datos: any) {
    this.servicio.postRegistro(datos.value).subscribe(u => {
      if (u.accessToken != '') {
        location.href = 'login'
      }
    }
    )



  }


}
