import { Component } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  constructor(private servicio: LibrosService){}

  nombre:any
  apellido:any
  id:any
  email:any

  cargar(form: any) {


    this.servicio.postProducto(form.value).subscribe()

  }
}
