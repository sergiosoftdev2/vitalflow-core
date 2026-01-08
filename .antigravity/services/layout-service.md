# LayoutService

**Ubicación:** `src/app/services/layout.service.ts`

## Propósito
Gestionar el estado global de la interfaz de la aplicación, principalmente la visibilidad de elementos como el Sidebar, Modales o Paneles laterales.

## Estado (Signals)
- `isSidebarOpen`: Señal de solo lectura que indica si el sidebar está desplegado o no.

## Métodos
- `toggleSidebar()`: Alterna el estado del sidebar.
- `openSidebar()`: Abre el sidebar.
- `closeSidebar()`: Cierra el sidebar.

## Reglas de Negocio
1. **Consistencia:** Todos los componentes que necesiten reaccionar al estado del layout (ej. el sidebar mismo o el contenido principal para añadir un overlay) deben inyectar este servicio.
2. **Reactividad:** El sidebar debe animarse basándose en el valor de esta señal.
