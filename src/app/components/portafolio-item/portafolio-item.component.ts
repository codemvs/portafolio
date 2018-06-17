import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';;

import {ProductosService} from '../../services/productos.service'

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styles: []
})
export class PortafolioItemComponent{

  producto:any = undefined;
  cod:string = undefined;

  constructor(private route:ActivatedRoute,
              private _ps:ProductosService){
    route.params.subscribe(parametros=>{
      _ps.cargar_producto(parametros.id)
          .subscribe(res => {
            
            this.producto = res.json();
            console.log(this.producto);
          });

          this.cod = parametros.id;
    });
  }
}
