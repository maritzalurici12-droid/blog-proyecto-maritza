

import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router'; // Importar withHashLocation
 

import { appRoutes } from './app.routes'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withHashLocation()) 
  ]
};