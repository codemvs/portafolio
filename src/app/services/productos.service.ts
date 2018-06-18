import { Injectable } from '@angular/core';
import { Http } from "@angular/http";


@Injectable()
export class ProductosService {
  productos:any[] = [];
  productos_filtrados:any[] = [];
  cargando:boolean = true;

  constructor( public http:Http) { 
      this.cargar_productos();
  }
  public cargar_producto(cod:string){
    return this.http.get(`https://webcodemvs.firebaseio.com/productos/${cod}.json`);
  }
  public cargar_productos(){
    this.cargando = true;
      let promesa = new Promise((resolve,reject)=>{
        this.http.get("https://webcodemvs.firebaseio.com/productos_idx.json")
                  .subscribe(res=>{
                                          
                    this.productos = res.json();
                    this.cargando = false;
                    resolve();
                    
                  });        
      });
      return promesa;
  }
  public busacarProductos( termino:string ){
    if(this.productos.length==0){
      this.cargar_productos().then(()=>{
        this.filtrar_productos(termino);  
      });
    } else {
      this.filtrar_productos(termino);
    }
  }

  public filtrar_productos(termino:string){
    this.productos_filtrados = [];
    termino = termino.toLowerCase();
    this.productos.forEach(prod=>{
      if(prod.categoria.indexOf(termino)>0 || prod.titulo.toLowerCase().indexOf(termino)>0){
        this.productos_filtrados.push(prod);
      }
      
    });
  }
}
