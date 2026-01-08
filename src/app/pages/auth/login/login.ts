import { Component, signal, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CardComponent } from "../../../ui/card/card";
import { InputTextComponent } from "../../../ui/input-text/input-text";
import { InputPasswordComponent } from "../../../ui/input-password/input-password";
import { ButtonComponent } from "../../../ui/button/button";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, CardComponent, ButtonComponent, InputTextComponent, InputPasswordComponent],
  templateUrl: './login.html',
})
export class LoginComponent implements OnInit {
  private readonly authService = inject(AuthService);
  
  email = signal('');
  password = signal('');
  
  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['user']) {
        try {
          const user = JSON.parse(decodeURIComponent(params['user']));
          this.authService.handleSocialLogin(user);
        } catch (e) {
          console.error('Error parsing user data', e);
        }
      }
    });
  }

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
