import { Component, inject } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-autor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './autor.component.html',
  styleUrl: './autor.component.css'
})
export class AutorComponent {

  nombre:any
  apellido:any
  id:any
  email:any
  
  servicio = inject(LibrosService)
  ruta = inject(ActivatedRoute)
  

  item: any;

  ngOnInit() {
    this.ruta.params.subscribe(r => {
      console.log(r);
      
      this.servicio.getProductoID(r['idAutor']).subscribe(p => {
        this.id = p.id
        this.nombre = p.nombre
        this.apellido = p.apellido
        this.email= p.email
      })
    })
    
  }

  editar(data: any) {
    this.servicio.putProductos(data.value).subscribe()
   // window.location.href=''
  }
}
