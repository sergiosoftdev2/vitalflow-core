import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CardComponent } from "../../ui/card/card";
import { InputTextComponent } from "../../ui/input-text/input-text";
import { InputPasswordComponent } from "../../ui/input-password/input-password";
import { ButtonComponent } from "../../ui/button/button";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, CardComponent, ButtonComponent, InputTextComponent, InputPasswordComponent],
  templateUrl: './login.html',
})
export class LoginComponent {
  
  email = signal('');
  password = signal('');

  constructor(private authService: AuthService) {}

  onGoogleLogin() {
    this.authService.googleLogin();
  }

  onSubmit(e: Event) {
    e.preventDefault();
    if (this.email()) {
      this.authService.login(this.email());
    }
  }
}
