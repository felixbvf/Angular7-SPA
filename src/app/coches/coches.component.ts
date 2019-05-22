import { Component } from '@angular/core';
import {Coche } from './coche';
import {PeticionesService} from '../services/peticiones.service'; //se importa el servicio

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  providers:  [PeticionesService] //se agrega el servicio
})
export class CochesComponent{
  public coche: Coche;
  public coches:Array<Coche>;
  public articulos;
  constructor(
    private _peticionesService: PeticionesService
  ){
    this.coche = new Coche("",0,"");
    this.coches = [
      new Coche("Seat Panda", 120,"Blanco"),
      new Coche("Renault Clio",110, "Azul")
    ];
  }

  ngOnInit(){
    //console.log(this._peticionesService.getPrueba());
    this._peticionesService.getArticulos().subscribe(
      result => {
        this.articulos = result;
        console.log(result);
        if(!this.articulos){
          console.log("Error en el servidor");
        }
      },
      error => {
        var errorMenssage = <any>error;
        console.log(errorMenssage);
      }
    );

  }

  onSubmit(){
    this.coches.push(this.coche);
    this.coche = new Coche("",0,""); //vaciando el formulario
  }



}
