import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
 imports: [FormsModule, 
  CommonModule], 
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {
  messageSent: boolean = false;
  
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    
    setTimeout(() => {
      this.messageSent = true; 
      setTimeout(() => {
        this.messageSent = false;
        this.contactForm = { name: '', email: '', message: '' }; 
      }, 5000); 
      
    }, 500); 
  }
}