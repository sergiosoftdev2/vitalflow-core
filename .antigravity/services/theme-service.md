# ThemeService

**Ubicación:** `src/app/services/theme.service.ts`

## Propósito
Gestionar la apariencia visual de la aplicación (Modo Claro vs Modo Oscuro) y su persistencia.

## Estado (Signals)
- `activeTheme`: Señal que contiene el tema actual (`LIGHT` o `DARK`).

## Métodos

### `setTheme(theme: ThemeType)`
Establece y persiste un tema específico.
- **Acción:** Actualiza la señal y guarda la preferencia en `localStorage`.

### `toggleTheme()`
Cambia entre los temas disponibles.
- **Acción:** Alterna entre `LIGHT` y `DARK` basándose en el valor actual.

## Reglas de Negocio
1. **Persistencia Silenciosa:** El tema debe persistir entre recargas del navegador sin requerir que el usuario esté autenticado.
2. **Sincronización:** Cualquier componente que use esta señal se actualizará automáticamente cuando el tema cambie.
