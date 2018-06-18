import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'  
})
export class SearchComponent{
  termino:string = undefined;

  constructor(private route:ActivatedRoute,
              public _ps:ProductosService) {
    this.route.params.subscribe(parametros=>{
      this.termino = parametros.termino;
      
      _ps.busacarProductos(this.termino);
    });
   }


}
