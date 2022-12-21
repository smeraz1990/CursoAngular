import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-lat',
  templateUrl: './menu-lat.component.html',
  styleUrls: ['./menu-lat.component.css']
})
export class MenuLatComponent {
  @Output() MostarLista = new EventEmitter<string>();
  @Output() MostarABM = new EventEmitter<string>();

  mostrarComponente(NumComponente:number){
    if(NumComponente == 1)
    {
      this.MostarLista.emit('true')
      this.MostarABM.emit('false')
    }
    else
    {
      this.MostarLista.emit('false')
      this.MostarABM.emit('true')
    }

    //console.log("Aqui esta el dato " + NumComponente)
  }
}


