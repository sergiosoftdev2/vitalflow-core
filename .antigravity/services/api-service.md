# ApiService

**Ubicación:** `src/app/services/api.ts`

## Propósito
Actuar como un wrapper simplificado sobre el `HttpClient` de Angular para estandarizar las peticiones al backend de Vyntal.

## Dependencias
- `HttpClient`: Para realizar las peticiones HTTP.
- `environment`: Para obtener la `apiUrl` base.

## Métodos

### `get(endpoint: string)`
Realiza una petición GET al API base.
- **Parámetro:** `endpoint` (ej. `'users/profile'`).
- **Acción:** Retorna un `Observable` con la respuesta.

## Reglas de Negocio y Patrones
1. **Concatenación Automática:** Siempre añade la `apiUrl` del entorno. No se deben pasar URLs completas.
2. **Evolución:** En el futuro, este servicio (o un interceptor) añadirá automáticamente el token de autorización desde el `SessionService` a todas las peticiones.
3. **Simplicidad:** Mantener el servicio ligero. Si se requiere lógica compleja de transformación de datos, esta debe ir en servicios especializados de dominio.
