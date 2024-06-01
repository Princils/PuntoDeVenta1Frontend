import { Component } from '@angular/core';
interface Producto {
  nombre: string;
  precio: number;
  cantidad: number;
  tipo:string;
}
@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrl: './venta.component.css'
})
export class VentaComponent {
  productos: Producto[] = [
    { nombre: 'Tomate', precio: 5.99,tipo:'kg', cantidad: 1 },
    { nombre: 'Jengibre', precio: 12.99,tipo:'kg', cantidad: 1 },
    { nombre: 'Tomate', precio: 5.99,tipo:'kg', cantidad: 1 }
  ];

  get subtotal() {
    return this.productos.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
  }
  get productototal(){
    return this.productos.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
  }
  get shipping() {
    return 3.99; // Valor fijo para envío
  }

  get tax() {
    return 2.00; // Valor fijo para impuestos
  }

  get total() {
    return this.subtotal + this.shipping + this.tax;
  }

  updateCantidad(producto: Producto, event: any) {
    const cantidad = event.target.value;
    producto.cantidad = cantidad ? parseInt(cantidad, 10) : 0;
  }

  eliminarProducto(index: number) {
    this.productos.splice(index, 1);
  }
}
