import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PreguntasYRespuestasComponent } from './preguntas-yrespuestas/preguntas-yrespuestas.component';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PreguntasYRespuestasComponent,
    AsignaturasComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
