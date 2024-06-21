import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos = [{
    nombre: 'tomate',
    inventario: 0,
    precioPromedio: 0,
    precio:100,
    fecha: '05/02/10'
  },{
    nombre: 'tomate',
    inventario: 0,
    precio:100,
    precioPromedio: 0,
    fecha: '05/02/10'
  }
];

}
