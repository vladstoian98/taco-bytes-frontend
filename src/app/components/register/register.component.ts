import { Component } from '@angular/core';
import { RegistrationForm } from './registration-form';
import { RegistrationService } from 'src/app/service/registration-service/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../../app.component.scss']
})
export class RegisterComponent {

  model = new RegistrationForm();

  constructor(private registrationService: RegistrationService, private router : Router) {}

  onSubmit() {
    this.registrationService.registerUser(this.model).subscribe(
      response => {
        console.log('Registration successful', response);
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}
