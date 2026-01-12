---
description: Guía para crear nuevos componentes de UI siguiendo el sistema de diseño de Clinily
---

# Guía de Creación de Componentes UI (Clinily)

Para mantener la consistencia estética y técnica en el sistema de diseño de , sigue estas reglas al crear un nuevo componente desde cero.

## 1. Estructura de Archivos
Ubica el componente en `src/app/ui/[nombre-del-componente]/`.
Divide la lógica para mayor mantenibilidad:
- `component.ts`: Lógica, inputs (Signals), outputs y clases computadas.
- `component.html`: Marcado semántico.
- `component.enum.ts`: Definición de variantes, colores y tamaños.
- `component.constants.ts`: Tokens de clases Tailwind, clases base y mapeos de variantes.

## 2. Arquitectura del Componente (Angular Standalone)
- Usa `standalone: true`.
- Implementa inputs usando la API de **Signals** (`input()`, `input.required()`).
- Usa `computed()` para generar el objeto de clases de Tailwind dinámicamente.
- Exporta constantes de clases para evitar "magic strings" en el template.

## 3. Sistema de Diseño y Estética
 tiene una identidad visual premium y moderna:

### Colores (OfficialColors)
- **Importante**: SIEMPRE importa y usa `OfficialColors` de `src/app/ui/colors.constants.ts`.
- No hardcodees colores si ya existen en los tokens.
- **Acciones**: Usa `primary_action`, `secondary_action` o `destructive_action`.
- **Fondos**: Usa `default_bg_color`, `default_bg_hover`.
- **Texto**: Usa `default_text_accent`, `default_text_subtle`.

### Bordes y Formas
- La plataforma es significativamente **redondeada**.
- Usa `rounded-3xl` para contenedores/tarjetas, `rounded-2xl` para elementos medianos y `rounded-full` para botones/badges/inputs.

### Estados de Foco (Focus Rings)
- Los elementos interactivos deben tener un anillo de enfoque azul:
  ```css
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950
  ```

### Transiciones y Dark Mode
- Aplica `transition-all duration-300 ease-in-out` en elementos interactivos.
- Asegura compatibilidad con Dark Mode usando prefijos `dark:`.
- Los bordes suelen ser `border-zinc-200` y `dark:border-zinc-800`.

## 4. Ejemplo de Implementación (Template de Referencia)

### Constant file (`badge.constants.ts`)
```typescript
import { OfficialColors } from "../colors.constants";

export const BASE_CLASSES = `
  flex items-center justify-center gap-2 rounded-full 
  transition-all duration-300 ease-in-out
  focus:outline-none focus:ring-2 focus:ring-blue-500
`;
```

### Logic file (`component.ts`)
```typescript
@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component.html',
})
export class CustomComponent {
  variant = input<VARIANT>('filled');
  
  classes = computed(() => [
    BASE_CLASSES,
    VARIANT_MAP[this.variant()]
  ]);
}
```

## 5. Checklist de Revisión
- [ ] ¿Es standalone?
- [ ] ¿Usa Signals para inputs?
- [ ] ¿Importa OfficialColors?
- [ ] ¿Tiene soporte Dark Mode?
- [ ] ¿Es suficientemente redondeado (`rounded-3xl` / `rounded-full`)?
- [ ] ¿Tiene el focus ring azul reglamentario?