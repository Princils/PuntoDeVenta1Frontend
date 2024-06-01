import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productos = [
    {
      nombre: 'Tomate',
      precio: '$5.99 / kg',
      imagen: 'ruta-a-la-imagen-de-tomate'
    },
    {
      nombre: 'Jengibre',
      precio: '$12.99 / kg',
      imagen: 'ruta-a-la-imagen-de-jengibre'
    },
    {
      nombre: 'Tomate',
      precio: '$5.99 / kg',
      imagen: 'ruta-a-la-imagen-de-tomate'
    }
  ];
}
