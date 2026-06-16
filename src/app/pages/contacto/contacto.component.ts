import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  formData: ContactForm = {
    name: '',
    email: '',
    subject: 'General',
    message: ''
  };

  submitted: boolean = false;
  successName: string = '';

  onSubmit(form: any) {
    if (form.valid) {
      this.successName = this.formData.name;
      this.submitted = true;
      
      // Reset form model
      this.formData = {
        name: '',
        email: '',
        subject: 'General',
        message: ''
      };
      
      form.resetForm({
        subject: 'General'
      });
      
      // Auto close success alert after 6 seconds
      setTimeout(() => {
        this.submitted = false;
      }, 6000);
    }
  }

  dismissAlert() {
    this.submitted = false;
  }
}
