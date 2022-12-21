import { Component, Input, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Alumno } from '../alumno';
import { DialogoarticuloComponent } from '../dialogoarticulo/dialogoarticulo.component'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent{
  @Input() data = 'data';
  columnas: string[] = ['nombre', 'pais', 'borrar'];

  datos: Alumno[] = [new Alumno('Simon Daniel', 'Meraz Sariñana', 116,'01-01-1990'),
  new Alumno('Arturo', 'Hernandez', 116,'01-01-1990'),
  new Alumno('Marcelino', 'Zamarripa', 116,'01-01-1990'),
  ];

  ds = new MatTableDataSource<Alumno>(this.datos);

  @ViewChild(MatTable) tabla1!: MatTable<Alumno>;

  constructor(public dialog: MatDialog) { }

  abrirDialogo() {
    const dialogo1 = this.dialog.open(DialogoarticuloComponent, {
      data: new Alumno('', '', 0,'01-01-1990')
    });

    dialogo1.afterClosed().subscribe(art => {
      if (art != undefined)
        this.agregar(art);
        console.log(art)
    });
  }

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  agregar(art: { inpName: string; inpApellido: string; cbxPais: number; inpFechaNac: string; }) {
    console.log("estos datos", art)
    this.datos.push(new Alumno(art.inpName, art.inpApellido, art.cbxPais, art.inpFechaNac));
    console.log(this.datos)
    this.tabla1.renderRows();
  }
}


