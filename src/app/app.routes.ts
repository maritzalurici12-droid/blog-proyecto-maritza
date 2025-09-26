import { Routes } from '@angular/router';
import { Sobremi } from './components/sobremi/sobremi';
import { Formacion } from './components/formacion/formacion';
import { Contacto } from './components/contacto/contacto'; 

export const routes: Routes = [
  
  { path: '', component: Sobremi, title: 'Blog - Sobre Mí' },

  { path: 'sobre-mi', component: Sobremi, title: 'Blog - Sobre Mí' },
  { path: 'formacion', component: Formacion, title: 'Blog - Formación' },
  { path: 'contacto', component: Contacto, title: 'Blog - Contacto' },

  { path: '**', redirectTo: '' }
];
