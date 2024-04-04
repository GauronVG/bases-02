import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Empleado } from '../../interfaces/interfaces';

@Component({
  selector: 'app-form',
templateUrl:'./form.component.html'

})



export class FormComponent {

  @Output()
agregar : EventEmitter<Empleado> = new EventEmitter;


  public temp_empleado:Empleado = {
        nombre:'nombre',
    apellido:'apellido',
    edad:5
  };

  emitir():void{
    this.agregar.emit(this.temp_empleado)

    this.temp_empleado =  {
      nombre:'',
  apellido:'',
  edad:0
}

  };





}
