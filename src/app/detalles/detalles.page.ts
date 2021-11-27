import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChehinService } from '../services/chehin.service';
import { AlertController } from '@ionic/angular';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  id: string;

  public arreglonuevo: Producto[] = [];

  constructor(
    private route: ActivatedRoute,
    private chehinService: ChehinService,
    private alertCtrl: AlertController,
  ) {
    console.log('Antes : ' + this.id);

    this.id = this.route.snapshot.paramMap.get('id');

    console.log('Despues : ' + this.id);

    this.devuelveProducto();
    
  }

  ngOnInit() {
  }

// *********************************************
// Agregar categoria - Funcion del boton
// *********************************************


async agregaProd() {

  const capa = document.getElementById('capa');
  // capa.innerHTML = 'Contenido para la capa';

  const alert = await this.alertCtrl.create({
    header: 'Ingreso de ' + capa.innerText,
    inputs: [
      {
        name: 'producto',
        type: 'text',
        placeholder: 'Producto'
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
                    console.log('El tipo de la data es : ' );
                    // if (data.titulo.lenght === 0 ) {
                    //    return;
                    //  }
                       // this.chehinService.crearProducto(data.tipo,data.desc);
                     }
                    }
             ]
  });

  await alert.present();
}


devuelveProducto() {

  // console.log('La marca es : ' + this.arreglonuevo);

 this.arreglonuevo = this.chehinService.arregloProductos.filter(arreglo => arreglo.tipo === this.id);

 // return arreglonuevo;
 // console.log('this.arregloNuevo es : ' + this.arreglonuevo.marca);
}

}
