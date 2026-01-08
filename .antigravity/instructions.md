# Reglas Universales de Antigravity para Vyntal Core

Como asistente IA, debes seguir estas reglas estrictamente antes de proponer cambios o escribir código en este repositorio.

## 1. Fase de Orientación Obligatoria
- **SIEMPRE** lee primero `.antigravity/services-docs.md` antes de sugerir cambios en la lógica de negocio o servicios.
- **SIEMPRE** verifica si el servicio que vas a tocar tiene un archivo específico en `.antigravity/services/`.

## 2. Reglas de Arquitectura (Servicios)
- **SessionService es Sagrado**: Ningún componente o servicio (excepto SessionService) puede acceder a `localStorage` para datos de usuario.
- **Signals sobre Observables**: Para el estado síncrono (usuario, tema, sesión), usa siempre Angular Signals.
- **Tipado Estricto**: Prohibido el uso de `any` en entidades de dominio. Consulta `src/app/interfaces/`.

## 3. Desarrollo de UI
- **Aesthetic First**: Los componentes deben seguir el sistema de diseño premium definido.
- **Standalone**: Todos los nuevos componentes, directivas y pipes deben ser `standalone: true`.

---
*Estas reglas aseguran que la IA se comporte como un arquitecto senior del proyecto, manteniendo la consistencia técnica a largo plazo.*
