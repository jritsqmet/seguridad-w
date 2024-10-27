import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  servicio = inject(UsuarioService)

  usuarios:any
  genero:any='todos'

  ngOnInit(){
    this.servicio.getUsuarios().subscribe( u =>{
      this.usuarios = u.results
    })
  }

}
