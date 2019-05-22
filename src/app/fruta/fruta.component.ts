import { Component } from '@angular/core';
@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})
export class FrutaComponent{
    public nombre_componente = "Componente Fruta";
    public listado_frutas = "Naranja, Manzana, Pera y Sandia";
    public nombre: string;
    public edad: number;
    public mayorDeEdad: boolean;
    public trabajos: Array<any> = [77,'Carpitenro', 'Albañil', 'Fontanero'];
    comodin: any;

    constructor(){
      this.nombre = 'Felix Balderrama Veizaga';
      this.edad= 27;
      this.mayorDeEdad = false;
      this.comodin = 'SI';

    }
    ngOnInit(){ // Es lo primer metodo que se ejecuta
      this.cambiarNombre();
      this.cambiarEdad(105);
    //  alert(this.nombre + " " + this.edad);
      //Variables y alcance
      var uno = 8;
      var dos = 15;
      if(uno === 8){
        let uno =3; //variable a nivel de bloque
        var dos = 88; // variable a nivel global
        console.log('DENTRO DEL IF: ' + uno + " " +dos);
      }
      console.log('DENTRO DEL IF: ' + uno + " "+ dos);
    }

    cambiarNombre(){
      this.nombre = 'Mery Silva Amazonas';
    }
    cambiarEdad(edad){
      this.edad = edad;
    }
}
