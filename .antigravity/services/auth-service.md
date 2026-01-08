# AuthService

**Ubicación:** `src/app/services/auth.service.ts`

## Propósito
Gestionar los flujos de trabajo de autenticación y la comunicación con el backend para procesos de identidad (login, registro, OAuth). Su misión es manejar la lógica de negocio de "cómo" entra o sale un usuario de la aplicación.

## Dependencias
- `SessionService`: Para delegar el almacenamiento del estado.
- `Router`: Para gestionar las redirecciones tras acciones de auth.

## Métodos Principales

### `googleLogin()`
Inicia el flujo de autenticación social.
- **Acción:** Redirige la ventana completa (`window.location.href`) al endpoint del backend de Google OAuth (`${apiUrl}/auth/google`).

### `handleSocialLogin(user: User)`
Procesa el resultado de una autenticación social exitosa.
- **Parámetros:** Recibe el objeto `User` directamente (generalmente capturado por el componente de login desde los query params).
- **Acción:** Delega el guardado al `SessionService` y navega hacia el `/dashboard`.

### `login(email: string)`
(Actualmente Mock/Prototipo) Realiza el proceso de login manual.
- **Acción:** Genera un usuario de prueba o llama al API, delega la persistencia y redirige.

### `logout()`
Finaliza la sesión del usuario.
- **Acción:** Llama a `sessionService.clearSession()` y redirige al usuario a la página de login.

## Reglas de Negocio y Patrones
1. **Sin Estado Propio:** `AuthService` no debe almacenar el objeto usuario en una variable local; debe consultar siempre a `SessionService`.
2. **Responsabilidad de Navegación:** El `AuthService` es el que decide "qué pasa después" de una acción de autenticación (ej. redirigir al dashboard).
3. **Encapsulamiento del Backend:** Oculta los detalles del API de autenticación (URLs, estrategias) al resto de la aplicación.
