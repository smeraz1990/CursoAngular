import { Component, Input, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Alumno } from '../alumno';
import { DialogoarticuloComponent } from '../dialogoarticulo/dialogoarticulo.component'
import { MatTableDataSource } from '@angular/material/table';
import { MiservicioService } from '../miservicio.service';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent{
  @Input() data = 'data';
  columnas: string[] = ['nombre', 'pais', 'borrar'];

  datos = this.servicio.obteneralumnos()

  ds = new MatTableDataSource<Alumno>(this.datos);

  @ViewChild(MatTable) tabla1!: MatTable<Alumno>;

  constructor(public dialog: MatDialog,
    private servicio: MiservicioService) { 
    
  }

  abrirDialogo() {
    const dialogo1 = this.dialog.open(DialogoarticuloComponent, {
      data: new Alumno('', '', 0,'01-01-1990')
    });

    dialogo1.afterClosed().subscribe(art => {
      if (art != undefined)
        this.agregar(art);
        //console.log(art)
    });
  }

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  agregar(art: { inpName: string; inpApellido: string; cbxPais: number; inpFechaNac: string; }) {

    this.servicio.addAlumno(art)

    this.servicio.GetAlumno$().subscribe(alumno =>{
      this.datos = alumno
    })
    console.log(this.datos)
    this.tabla1.renderRows();
  }


}


