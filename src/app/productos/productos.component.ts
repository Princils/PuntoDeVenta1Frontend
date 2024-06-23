import { Component } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
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

constructor(private modalService: ModalService) {}

openModal() {
  this.modalService.open();
}
}
