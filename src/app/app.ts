
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router'; 

import { Menu } from './shared/menu/menu'; 
import { Footer } from './shared/footer/footer'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterModule, 
    Menu, 
    Footer  
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}