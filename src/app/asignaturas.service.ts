import { Injectable } from '@angular/core';
import {asignaturas} from './asignaturas-interface';
import{mockAsignaturas} from './mock-asignaturas';
@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  constructor() { }
  getAsignatura():asignaturas[]{
    return mockAsignaturas;
  }
}
