import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class InformacionService {

  info:any = {}; //guardar informacion 
  equipo:any[] = []; //guardar informacion 
  cargada:boolean = false;
  cargadaSobreNostros:boolean = false;

  constructor( public http:Http ) {
    this.cargaInfo();
    this.cargaSobreNosotros();    
   }
   public cargaInfo(){
    this.http.get('./assets/data/info.pagina.json')
              .subscribe( data => {                
                this.cargada = true;
                this.info = data.json();
              })
   }
   //obtine datos de firestore
   public cargaSobreNosotros(){
    this.http.get('https://webcodemvs.firebaseio.com/equipo.json')
              .subscribe( data => {
                  
                this.cargadaSobreNostros = true;
                this.equipo = data.json();
              })
   }

}
