import {Injectable} from '@angular/core';

@Injectable() //decorador
export class RopaService{
  public nombre_prenda = 'Pantalones vaqueros';
  public coleccion_ropa = ['Pantalones Blancos', 'Camiseta roja'];

  prueba(nombre_prenda){
    return nombre_prenda;
  }

  addRopa(nombre_prenda: string):Array<string>{
    //console.log(nombre_prenda);
    if (nombre_prenda)
    {
      this.coleccion_ropa.push(nombre_prenda);
      return this.getRopa();
    }
    else{
      alert("Ingrese nombre de prenda");
    }

  }

  deleteRopa(index:number){
    this.coleccion_ropa.splice(index,1);
    return this.getRopa();
  }

  getRopa(){
    return this.coleccion_ropa;
  }



}
