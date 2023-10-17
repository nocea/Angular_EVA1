import { Component } from '@angular/core';
import {preguntas} from '../preguntas-interface';
import{preguntasRespuestas} from '../mock-preguntas';
@Component({
  selector: 'app-preguntas-yrespuestas',
  templateUrl: './preguntas-yrespuestas.component.html',
  styleUrls: ['./preguntas-yrespuestas.component.css']
})
export class PreguntasYRespuestasComponent {
  titulo="Preguntas Y Respuestas";
listaPreguntasRespuestas=preguntasRespuestas;
}
