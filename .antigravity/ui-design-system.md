# Sistema de Diseño UI - Vyntal Core

Este documento define las reglas de oro para la creación y modificación de componentes en el directorio `src/app/ui/`. Como experto en UI, cualquier IA debe seguir estas directrices para asegurar un aspecto premium y consistente.

## 1. Tokens de Diseño (Single Source of Truth)

### Colores
**NUNCA** uses clases de colores de Tailwind arbitrarias (ej. `bg-red-500`) en el HTML o lógicas de componentes. Usa siempre los tokens de `src/app/ui/colors.constants.ts`.

Tokens disponibles en `OfficialColors`:
- **Primary:** Acabado verde esmeralda.
- **Secondary:** Zinc (oscuro en light mode, claro en dark mode).
- **Destructive:** Rojo para acciones críticas.
- **Actions:** Variantes específicas para hover/active en botones outlined o ghost.

### Tamaños
Usa siempre el enum `src/app/ui/sizes.enum.ts` (`sm`, `base`, `md`, `lg`) para mantener la jerarquía visual.

## 2. Anatomía de un Componente UI Premium

Cada componente nuevo debe seguir esta estructura de archivos para mantener la modularidad:
- `nombre.ts`: Lógica del componente usando `input()`, `computed()` y `output()`.
- `nombre.html`: Estructura semántica.
- `nombre.constants.ts`: Unidades de clases de Tailwind (separadas de la lógica).
- `nombre.enum.ts`: Definición de variantes, colores y tipos específicos.

## 3. Reglas de Estilo y UX
1. **Bordes:** Preferimos `rounded-full` para botones y `rounded-xl` o `rounded-2xl` para cards/inputs para un look moderno y suave.
2. **Animaciones:** Usa siempre `transition-all duration-300 ease-in-out` para hovers y cambios de estado.
3. **Dark Mode:** Todos los componentes deben ser nativos en Dark Mode usando el prefijo `dark:`.
4. **Interactividad:** Los elementos clicables deben tener un feedback visual claro (`hover:scale-[1.02]`, `active:scale-95`).

## 4. Ejemplo de Implementación (Patrón Constantes)
Separa las clases de Tailwind en un archivo de constantes para mantener el archivo `.ts` limpio:

```typescript
// button.constants.ts
export const BASE_CLASSES = 'flex items-center gap-2 transition-all ...';
export const VARIANT_CLASSES = {
  primary: OfficialColors.primary_bg_color,
  // ...
};
```

---
*Si te pido crear un componente, lee primero este documento y verifica las constantes de color actuales.*
