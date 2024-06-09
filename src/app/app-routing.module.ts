import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { VentaComponent } from './venta/venta.component';
import { ProductonewComponent } from './productonew/productonew.component';
import { LoginComponent } from './login/login.component';
import { MostrarVentasComponent } from './mostrar-ventas/mostrar-ventas.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {path:"principal",component:PrincipalComponent},
  {path:"error",component:ErrorComponent},
  {path:"venta",component:VentaComponent},
  {path:"productonew",component:ProductonewComponent},
  {path:"login",component:LoginComponent},
  {path:"mostrar-ventas",component:MostrarVentasComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/error' }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
