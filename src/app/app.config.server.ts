// src/app/app.config.server.ts
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideRouter } from '@angular/router'; 
import { appRoutes } from './app.routes'; 

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    
    provideRouter(appRoutes) 
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);