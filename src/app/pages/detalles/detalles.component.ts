import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {

  ruta = inject(ActivatedRoute)
  servicio = inject(UsuarioService)

  usuario:any

  ngOnInit(){
    this.ruta.params.subscribe(p =>{
      console.log(p['idUsuarios']);

      let temp:any
      this.servicio.getUsuarios().subscribe(u=>{
        temp = u.results
      } )



      temp.forEach((element: { id: { name: any; }; }) => {
          if(element.id.name == p['idUsuarios']){
            alert("Encontrado")
            this.usuario = element
          }
      });

    })
  }

}
