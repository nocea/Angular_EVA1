import { Injectable } from '@angular/core';
import {preguntas} from './preguntas-interface';
import{mockPreguntasRespuestas} from './mock-preguntas';
@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  constructor() { }
  getPregunta():preguntas[]{
    return mockPreguntasRespuestas;
  }
}
