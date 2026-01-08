---
description: Guía para crear nuevos servicios siguiendo la arquitectura de Vyntal
---

Para crear un nuevo servicio de forma eficiente y siguiendo las reglas del proyecto, sigue estos pasos:

1. **Analizar Dependencias**:
   - Si el servicio necesita datos del usuario, inyecta `SessionService`.
   - Si el servicio necesita hacer peticiones HTTP, inyecta `ApiService`.

2. **Definir el Estado**:
   - Usa `signal` para estados mutables.
   - Expón el estado mediante señales de solo lectura (`asReadonly()`).

3. **Documentar**:
   - Crea un archivo `.md` en `.antigravity/services/nombre-servicio.md` detallando las responsabilidades y métodos.
   - Actualiza el índice en `.antigravity/services-docs.md`.

4. **Implementar**:
   - Usa la función `inject()` en lugar de inyección por constructor.
   - Asegura el tipado estricto de todos los métodos.

// turbo
5. Ejecuta `ng generate service services/nombre-del-servicio` tras confirmar el plan.
