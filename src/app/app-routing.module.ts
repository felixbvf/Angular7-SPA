import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';

const routes: Routes = [
{ path: '', component: EmpleadoComponent},
{ path: 'empleado', component: EmpleadoComponent},
{ path: 'fruta', component: FrutaComponent},
{ path: 'home', component: HomeComponent},
{ path: 'contacto', component: ContactoComponent},
{ path: 'contacto/:page', component: ContactoComponent}, //Ruta con parametro
{ path: 'coches', component: CochesComponent},
{ path: '**', component: EmpleadoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
