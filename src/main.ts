import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ResistenciaComponent } from './app/componentes/resistencia/resistencia.component';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err))

bootstrapApplication(ResistenciaComponent)
  .catch(err => console.error(err));