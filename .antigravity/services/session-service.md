# SessionService

**Ubicación:** `src/app/services/session.service.ts`

## Propósito
El `SessionService` es el responsable central de gestionar la persistencia del estado del usuario y la sesión en el cliente. Actúa como el puente único entre el almacenamiento persistente (`localStorage`) y el estado reactivo de la aplicación.

## Estado (Signals)
El servicio utiliza `Angular Signals` para exponer el estado de forma eficiente:
- `user`: Una señal de solo lectura (`ReadOnlySignal<User | null>`) que contiene los datos del usuario actual.
- `isAuthenticated`: Una señal computada (`Computed<boolean>`) que indica si el usuario tiene una sesión activa (`!!user`).

## Métodos Principales

### `restoreSession()` (Privado)
Se ejecuta en el constructor del servicio.
- **Acción:** Intenta leer el objeto de usuario desde `localStorage` usando la clave `vyntal_user`.
- **Regla:** Si los datos están corruptos o no son válidos (JSON parse error), limpia la sesión automáticamente para evitar estados inconsistentes.

### `setUser(user: User)`
Establece el usuario actual en la aplicación.
- **Acción:** Actualiza la señal interna y persiste el objeto en `localStorage`.
- **Uso:** Debe llamarse tras un login exitoso o cuando se reciban datos actualizados del perfil.

### `clearSession()`
Elimina todos los datos de sesión.
- **Acción:** Resetea la señal a `null` y elimina la clave del `localStorage`.
- **Uso:** Fundamental durante el proceso de logout.

### `getUserValue()`
Helper para obtener el valor actual de la señal de forma síncrona sin suscribirse.

## Reglas de Negocio y Patrones
1. **Exclusividad de Almacenamiento:** Ninguna otra parte de la aplicación debe llamar a `localStorage.getItem('vyntal_user')` o `setItem`. El acceso debe ser centralizado aquí.
2. **Tipado Estricto:** Siempre debe operar con la interfaz `User`. El uso de `any` está prohibido para el objeto de usuario.
3. **Flujo de Datos Unidireccional:** El estado fluye desde este servicio hacia los componentes/otros servicios a través de las señales.
4. **Seguridad:** En futuras iteraciones, este servicio validará la caducidad del token (JWT) antes de restaurar la sesión.
