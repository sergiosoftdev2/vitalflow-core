import { Component, signal, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { FormsModule } from '@angular/forms';
import { CardComponent } from "../../../ui/card/card";
import { InputTextComponent } from "../../../ui/input-text/input-text";
import { InputPasswordComponent } from "../../../ui/input-password/input-password";
import { ButtonComponent } from "../../../ui/button/button";
import { LoginDto } from '../../../core/api/models';
import { ToolsService } from '../../clinics/services/tools.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, CardComponent, ButtonComponent, InputTextComponent, InputPasswordComponent],
  templateUrl: './login.html',
})
export class LoginComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly toolsService = inject(ToolsService);
  private route = inject(ActivatedRoute);
  
  email = signal('');
  password = signal('');
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['user']) {
        try {
          const user = JSON.parse(decodeURIComponent(params['user']));

          const token = params['token'] || 
                        params['access_token'] || 
                        params['accessToken'] || 
                        params['id'];
          
          const tokenInsideUser = user.access_token || user.token || user.accessToken || user.id;

          if (token || tokenInsideUser) {
            this.authService.handleSocialLogin(user, token || tokenInsideUser);
          }
        } catch (e) {
          console.error('Failed to parse user data from URL:', e);
        }
      }
    });
  }

  onGoogleLogin() {
    this.authService.googleLogin();
  }

  onSubmit(e: Event) {
    if (e) e.preventDefault();
    if (this.email() && this.password()) {
      const credentials: LoginDto = {
        email: this.email(),
        password: this.password(),
        deviceType: this.toolsService.getDeviceOS()
      };
      
      this.authService.login(credentials).subscribe({
        error: (err) => console.error('Error al iniciar sesión', err)
      });
    }
  }
}
