import { Component } from '@angular/core';
import {asignaturas} from '../asignaturas-interface';
import{mockAsignaturas} from '../mock-asignaturas';
import {AsignaturasService} from '../asignaturas.service'

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent {
  titulo="Asignaturas";
  listaAsignaturas:asignaturas[]=[];
  constructor(private asignaturasService:AsignaturasService){}
getAsignatura(): void {
  this.listaAsignaturas = this.asignaturasService.getAsignatura();
  
}
ngOnInit(): void {
  this.getAsignatura();
}
}