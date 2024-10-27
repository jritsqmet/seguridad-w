import { Routes } from '@angular/router';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { loginGuard } from './guards/login.guard';
import { GestionComponent } from './pages/gestion/gestion.component';
import { AutorComponent } from './pages/autor/autor.component';

export const routes: Routes = [

    { path: '', component: GaleriaComponent, },
    { path: 'gestion', component: GestionComponent, canActivate:[loginGuard]},
    { path: 'login', component: LoginComponent},
    { path: 'registro', component: RegistroComponent},
    { path: 'autor/:idAutor', component: AutorComponent},


    { path: 'usuarios/:idUsuarios', component: DetallesComponent},
    { path: '**', component: LoginComponent }

];
