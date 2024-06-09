import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productos = [
    {
      nombre: 'Clavos',
      precio: '$5.99 / kg',
      imagen: 'https://acerosycomplementos.com.mx/wp-content/uploads/2018/04/Clavo_estandar_image_4-500x390.jpg'
    },
    {
      nombre: 'Martillo',
      precio: '$12.99 / kg',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFTvEYAvfklA-CRXzXfVeTcegVncxfluTveA&s'
    },
    {
      nombre: 'Tomate',
      precio: '$5.99 / kg',
      imagen: 'https://acerosycomplementos.com.mx/wp-content/uploads/2018/04/Clavo_estandar_image_4-500x390.jpg'
    }
  ];
}
