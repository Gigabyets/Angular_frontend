import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  name = '';
  phone = '';
  password = '';
  bankAccount = '';
  constructor(private authService: AuthService) {}

  onRegister() {
    const userData = {
      name: this.name,
      phone: this.phone,
      password: this.password,
      bank_account: this.bankAccount,
    };

    this.authService.register(userData).subscribe(response => {
      // handle registration response, redirect to login or home page
    });
  }

}
