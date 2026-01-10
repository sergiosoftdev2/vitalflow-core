import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { FormsModule } from '@angular/forms';
import { CardComponent } from "../../../ui/card/card";
import { InputTextComponent } from "../../../ui/input-text/input-text";
import { InputPasswordComponent } from "../../../ui/input-password/input-password";
import { ButtonComponent } from "../../../ui/button/button";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, CardComponent, ButtonComponent, InputTextComponent, InputPasswordComponent],
  templateUrl: './register.html',
})
export class RegisterComponent {
  private readonly authService = inject(AuthService);
  
  firstName = signal('');
  lastName = signal('');
  email = signal('');
  password = signal('');

  onGoogleLogin() {
    this.authService.googleLogin();
  }

  onSubmit(e: Event) {
    if (e) e.preventDefault();
    if (this.email() && this.password()) {
      const userData = {
        firstName: this.firstName(),
        lastName: this.lastName(),
        email: this.email(),
        password: this.password()
      };
      
      this.authService.register(userData).subscribe({
        error: (err) => console.error('Error al registrar usuario', err)
      });
    }
  }
}
