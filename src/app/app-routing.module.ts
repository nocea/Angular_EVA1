import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreguntasYRespuestasComponent } from './preguntas-yrespuestas/preguntas-yrespuestas.component';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'preguntas', component: PreguntasYRespuestasComponent },
  { path: 'asignaturas', component: AsignaturasComponent },
  { path: 'inicio', component: InicioComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
