import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {


  acceso: any

  ngOnInit() {
    if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
      this.acceso = sessionStorage.getItem('login')

      console.log(this.acceso);


      if (sessionStorage.getItem('login') == 'false') {
        this.acceso == 'false'
      }
      console.log(this.acceso);
    }

  }

  cerrar() {
    sessionStorage.setItem('login', '')
    this.acceso = sessionStorage.getItem('login')
    window.location.href = ''
    console.log(this.acceso);

  }

}
