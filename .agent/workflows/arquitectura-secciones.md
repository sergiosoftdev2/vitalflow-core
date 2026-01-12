---
description: Guía de arquitectura de la aplicación para crear nuevas secciones y páginas en Clinily
---

# Guía de Arquitectura de Aplicación (Clinily)

Esta guía define cómo se estructuran las nuevas funcionalidades, páginas y rutas dentro del core de Vyntal para asegurar un crecimiento escalable y mantenible.

## 1. Estructura de Directorios Principal

- `src/app/pages/`: Contiene los componentes de página (vistas principales). Estructurado por dominio (auth, dashboard).
- `src/app/layout/`: Cascarones que envuelven las páginas (Sidebar + Header + Content Area).
- `src/app/services/`: Lógica de negocio compartida y comunicación con APIs.
- `src/app/ui/`: Componentes básicos, atómicos y reutilizables.
- `src/app/guards/`: Protección de rutas.

## 2. Flujo de Creación de una Nueva Sección

Para añadir una nueva funcionalidad (ej: "Inventario"), sigue estos pasos:

### Paso 1: Crear el Componente de Página
Crea el componente en su carpeta correspondiente dentro de `pages/`.
```bash
src/app/pages/dashboard/inventory/
├── inventory.ts
└── inventory.html
```

**Regla de Oro**: Cada página debe comenzar envolviendo su contenido en un `app-page-container`:
```html
<app-page-container>
  <header class="mb-8">
    <h1 class="text-2xl font-bold dark:text-white">Inventario</h1>
  </header>
  <!-- Contenido de la página -->
</app-page-container>
```

### Paso 2: Registrar la Ruta
No registres rutas directamente en `app.routes.ts` si forman parte de un módulo mayor. Usa los archivos de rutas dedicados:

- Si es una página del dashboard, edita `src/app/pages/dashboard/dashboard.routes.ts`.
- Si es una nueva rama principal, crea un archivo `.routes.ts` y llámalo con `loadChildren` en el router principal.

### Paso 3: Actualizar la Navegación (Sidebar)
La mayoría de las secciones requieren un acceso visual. Edita el componente `app-sidebar` (normalmente los `menuItems` en el TS del sidebar) para incluir el nuevo objeto:
```typescript
{ 
  label: 'Inventario', 
  route: '/dashboard/inventory', 
  icon: faBox 
}
```

## 3. Patrones de Diseño de Código

### Routing Lazy Loading
Todas las páginas deben cargarse mediante `loadComponent` o `loadChildren` para optimizar el bundle inicial.

### Comunicación entre Componentes
- **Hacia abajo (Padre a Hijo)**: Usa @Input (Signals).
- **Hacia arriba (Hijo a Padre)**: Usa @Output (`output()`).
- **Estado Global/Compartido**: Usa un **Service** centralizado con Signals. Evita pasar datos a través de 3 o más niveles de componentes.

### Layouts
Los layouts (como `DashboardLayoutComponent`) son responsables de:
1. Renderizar la navegación global (Sidebar/Navbar).
2. Manejar la responsividad global (apertura/cierre de menús).
3. Proveer el `<router-outlet>` donde se inyectan las páginas.

## 4. Gestión de Datos y API
- No realices llamadas `fetch` o `HttpClient` directamente desde los componentes de página.
- Encapsula todas las llamadas en un `Service` dentro de `src/app/services/`.
- Tipa todas las respuestas usando las interfaces definidas en `src/app/interfaces/`.

## 5. Checklist de Arquitectura
- [ ] ¿La página está dentro de `src/app/pages/`?
- [ ] ¿La ruta usa Lazy Loading?
- [ ] ¿Envuelve el contenido en un `app-page-container`?
- [ ] ¿La lógica de datos está en un Service?
- [ ] ¿Se ha añadido el elemento a la navegación si es necesario?