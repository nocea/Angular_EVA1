import { Component } from '@angular/core';
import {preguntas} from '../preguntas-interface';
import {PreguntasService} from '../preguntas.service'
import{mockPreguntasRespuestas} from '../mock-preguntas';

@Component({
  selector: 'app-preguntas-yrespuestas',
  templateUrl: './preguntas-yrespuestas.component.html',
  styleUrls: ['./preguntas-yrespuestas.component.css']
})
export class PreguntasYRespuestasComponent {
titulo="Preguntas Y Respuestas";
listaPreguntasRespuestas:preguntas[]=[];
constructor(private preguntasService:PreguntasService){}
getPreguntas(): void {
  this.listaPreguntasRespuestas = this.preguntasService.getPregunta();
  
}
ngOnInit(): void {
  this.getPreguntas();
}
}
