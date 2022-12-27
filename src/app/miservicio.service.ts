import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Alumno } from './alumno';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {
  public Alumnos: Alumno[]
  private alumnos$:Subject<Alumno[]>
  constructor() {
    this.Alumnos = [new Alumno('Simon Daniel', 'Meraz Sariñana', 116,'01-01-1990'),
    new Alumno('Arturo', 'Hernandez', 116,'01-01-1990'),
    new Alumno('Marcelino', 'Zamarripa', 116,'01-01-1990'),
    ];
    this.alumnos$ = new Subject();
  }

  addAlumno(alumno:{ inpName: string; inpApellido: string; cbxPais: number; inpFechaNac: string; }) {
    this.Alumnos.push(new Alumno(alumno.inpName, alumno.inpApellido, alumno.cbxPais, alumno.inpFechaNac));
    this.alumnos$.next(this.Alumnos)
  }

  GetAlumno$(): Observable<Alumno[]>
  {
    return this.alumnos$.asObservable();
  }

  public obteneralumnos(){
    
    return this.Alumnos
      
  }
    
  }