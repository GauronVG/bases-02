import { Component, Input } from '@angular/core';
import { Empleado } from './interfaces/interfaces';
import { TablaComponent } from './secciones/tabla/tabla.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  public lista:Empleado[] = [{
    nombre:'test',
    apellido:'test',
    edad:4
   },
  {nombre:'hosa',apellido:'pollo',edad:5}]


agregacion(item:Empleado){
  this.lista.push(item);
}
eliminacion(id:number){
  this.lista.splice(id,1);
}


  }

