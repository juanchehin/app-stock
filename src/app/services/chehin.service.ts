import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ChehinService {
  public arregloProductos: Producto[] = [];  // Arreglo de productosItem que contiene todo!

  constructor() {
    console.log('Servicio inicializado  ' );

    this.cargarStorage();
  }

  devuelveProductoI() {
  }

// *********************************************
// Crear producto
// *********************************************

  crearProducto( tipo: string, marca: string, precio: number ){

    const nuevoProdu = new Producto(marca, tipo , precio);

    this.arregloProductos.push(nuevoProdu);

    this.guardarStorage();
  }

// *********************************************
// Guardar en el Storage
// *********************************************


    guardarStorage(){
      localStorage.setItem('data', JSON.stringify(this.arregloProductos) );

    }

// *********************************************
// Devolver productos del storage
// *********************************************


cargarStorage() {

  if ( localStorage.getItem('data') ) {
     this.arregloProductos = JSON.parse( localStorage.getItem('data') );
   } else {
     this.arregloProductos = [];
  }
  }

}
