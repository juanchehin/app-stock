import { Component  } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ChehinService } from '../services/chehin.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // public arregloProductos: ProductoItem[] = [];  // Arreglo de productosItem que contiene todo!

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private alertCtrl: AlertController,
    private chehinService: ChehinService
  ) {


    }

// *********************************************
// Agregar categoria - Funcion del boton
// *********************************************


  async agregaCategoria() {

    const alert = await this.alertCtrl.create({
      header: 'Ingrese articulo nuevo',
      inputs: [
        {
          name: 'tipo',
          type: 'text',
          placeholder: 'Tipo de producto'
        },
        {
          name: 'marca',
          type: 'text',
          placeholder: 'Marca del producto'
        },
        {
          name: 'precio',
          type: 'number',
          placeholder: 'Precio del producto'
        }
      ],
      buttons: [
                 {
                   text: 'Cancelar',
                   role: 'cancel',
                   handler: ( ) => { // Funcion que se dispara cuando el boton se toca
                    console.log('Cancelar' );
                  }
                   },
                   {
                     text: 'Crear',
                     handler:  (data) => {
                      console.log('El tipo de la data es : ' + data );
                      // if (data.titulo.lenght === 0 ) {
                      //    return;
                      //  }
                      this.chehinService.crearProducto(data.tipo, data.marca, data.precio);
                       }
                      }
               ]
    });

    await alert.present();
  }

  accederProducto(id: string) {
    console.log('acceso al producto');
    this.navCtrl.navigateForward(`detalles/${id}`);
  }

}
