import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-ventas',
  templateUrl: './mostrar-ventas.component.html',
  styleUrl: './mostrar-ventas.component.css'
})
export class MostrarVentasComponent {
  venta = [{
    cliente: 'tomate',
    cantidad: 0,
    precio: 0,
    fecha: '05/02/10'
  },{
    cliente: 'tomate',
    cantidad: 0,
    precio: 0,
    fecha: '05/02/10'
  }
];

  onSubmit() {
    // Aquí puedes manejar la lógica para registrar la venta,
    // como enviar los datos a un servidor o guardarlos en un servicio.
    console.log('Venta registrada:', this.venta);
  }
}
