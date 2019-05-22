import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; //para ruta con parametro
@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html'
})

export class ContactoComponent{
  public titulo = "Pagina de Contacto de la web";
  public parametro; //variable para  ruta con parametro

  constructor( //para ruta con parametro
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit(){ //leer el parametro de la ruta
    this._route.params.forEach((params: Params) => {
      this.parametro = params['page'];
      console.log(params);
    });
  }
//Redirigir  con el router
  redirigir(){
    this._router.navigate(['/contacto','5907833'])
  }
  redirigirDos(){
    this._router.navigate(['/home'])
  }



}
