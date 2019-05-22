import { Component } from '@angular/core';
import {Coche } from './coche';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html'
})
export class CochesComponent{
  public coche: Coche;
  public coches:Array<Coche>;
  constructor(){
    this.coche = new Coche("",0,"");
    this.coches = [
      new Coche("Seat Panda", 120,"Blanco"),
      new Coche("Renault Clio",110, "Azul")
    ];
  }

  onSubmit(){
    this.coches.push(this.coche);
    this.coche = new Coche("",0,""); //vaciando el formulario
  }



}
