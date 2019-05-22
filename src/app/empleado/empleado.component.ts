import { Component } from '@angular/core';
import { Empleado } from './empleado';
@Component({
  selector: 'empleado-tag',
  templateUrl: './empleado.component.html'
})
export class EmpleadoComponent{
  public titulo = 'Titulo del componente empleado';
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public trabajador_externo:boolean;
  public color:string;
  public color_seleccionado:string;
  ngOnInit(){
    this.empleado = new Empleado('FELIX BALDERRAMA V.',35,'COCINERO',false);
    this.trabajadores = [
      new Empleado('ALEX VEIZAGA R.',25,'ADMINISTRATIVO',true),
      new Empleado('DAVID ROLABNDO R.',35,'TECNICO',true),
      new Empleado('REINA RIOS R.',35,'PROFESIONAL',true),
      new Empleado('DAYNA RODRIGUEZ R.',45,'PROGRAMADOR',true)
    ];
    this.trabajador_externo = true;
    this.color = 'blue';
    this.color_seleccionado = 'pink';
    console.log(this.empleado);
    console.log(this.trabajadores);
  }
  cambiarExterno(valor){
    this.trabajador_externo = valor;
  }
  logColorSeleccionado(){
    console.log(this.color_seleccionado);
  }

}
