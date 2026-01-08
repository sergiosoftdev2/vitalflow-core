# Vyntal Core - Arquitectura de Servicios

Este directorio contiene la documentación técnica detallada de los servicios centrales de la aplicación. Estos documentos sirven como guía de referencia para desarrolladores e IAs para entender las responsabilidades y reglas de negocio.

## Índice de Servicios

### 🔐 [SessionService](./services/session-service.md)
Gestiona la persistencia del usuario, el estado reactivo de la sesión (`Signals`) y el acceso exclusivo a `localStorage`.

### 🔑 [AuthService](./services/auth-service.md)
Maneja los flujos de autenticación (Login, Registro, OAuth), la comunicación con el API de identidad y las redirecciones de navegación.

### 🌐 [ApiService](./services/api-service.md)
Wrapper sobre `HttpClient` para centralizar y estandarizar las peticiones HTTP al backend de Vyntal.

### 🎨 [ThemeService](./services/theme-service.md)
Gestiona la preferencia visual (Light/Dark mode) y su persistencia.

### 🍱 [LayoutService](./services/layout-service.md)
Controla el estado global de la UI (Sidebar, modales, visibilidad de paneles).

---

## Directrices de Diseño UI
### ✨ [UI Design System](./ui-design-system.md)
Manual de estilo, uso de tokens de color, jerarquía de tamaños y patrones de componentes premium.

---

## Reglas Generales de Arquitectura
- **Inyección mediante `inject()`:** Se prefiere el uso de la función `inject()` de Angular 16+ sobre la inyección por constructor para mantener servicios más limpios.
- **Uso de Signals:** El estado que deba ser consumido por componentes debe exponerse mediante `Signals` para maximizar el rendimiento y la legibilidad.
- **Tipado Estricto:** Nunca usar `any` para entidades de dominio (como `User`).
- **UI de Identidad:** Todos los componentes UI deben usar los tokens de `colors.constants.ts`.
