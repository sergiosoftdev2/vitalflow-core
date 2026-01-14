import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { SessionService } from '../../../core/services/session.service';
import { ToastService } from '../../../core/services/toast.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const sessionService = inject(SessionService);
  const toastService = inject(ToastService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // Redirigir al login y limpiar sesión si el token no es válido o ha expirado
        toastService.error('Tu sesión ha expirado o es inválida. Por favor, inicia sesión de nuevo.');
        sessionService.clearSession();
      }
      return throwError(() => error);
    })
  );
};
