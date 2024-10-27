import { Component } from '@angular/core';
import { UsuariosComponent } from '../../components/usuarios/usuarios.component';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [UsuariosComponent],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

}
