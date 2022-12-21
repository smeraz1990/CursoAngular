import { Component, Input, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Articulo } from './articulo';
import { DialogoarticuloComponent } from './dialogoarticulo/dialogoarticulo.component'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() data = 'data';
  columnas: string[] = ['codigo', 'descripcion', 'precio', 'borrar'];

  datos: Articulo[] = [new Articulo('ruben', 'papas', 55),
  new Articulo('karla', 'diaz', 53),
  new Articulo('roberta', 'sanchez', 25),
  ];

  ds = new MatTableDataSource<Articulo>(this.datos);

  @ViewChild(MatTable) tabla1!: MatTable<Articulo>;

  constructor(public dialog: MatDialog) { }

  abrirDialogo() {
    const dialogo1 = this.dialog.open(DialogoarticuloComponent, {
      data: new Articulo('', '', 0)
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

  agregar(art: Articulo) {
    console.log("estos datos", this.data)
    this.datos.push(new Articulo(art.nombre, art.apellido, art.paisid));
    this.tabla1.renderRows();
  }
}
