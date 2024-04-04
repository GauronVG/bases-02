
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, input, Input, Output } from '@angular/core';
import { Empleado } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tabla',
  templateUrl:'./tabla.component.html'

})



export class TablaComponent {

  @Output()
borrar : EventEmitter<number> = new EventEmitter;


@Input()
  public lista1:Empleado[]= [{
    nombre:'Armando',
    apellido:'Villafuerte',
    edad:32
    }];



    onDelete(index:number){
      this.borrar.emit(index)

    }







}
