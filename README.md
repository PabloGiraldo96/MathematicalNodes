# Espacio Vectorial — Matemáticas

Animación 3D interactiva (React + TypeScript + react-three-fiber) de un
espacio vectorial cuyo núcleo es **Mathematics**. El árbol de temas es
**recursivo**: cualquier nodo, a cualquier profundidad, puede tener sus
propios hijos que se despliegan al hacer clic, con la cámara haciendo zoom
hacia él cada vez.

Por defecto: Mathematics → Aritmética / Álgebra / Cálculo / Geometría →
5 subtemas cada una. Como demostración de la recursividad, **Cálculo →
Derivadas** tiene a su vez 3 hijos propios (Regla de la Cadena, Regla del
Producto, Derivadas Implícitas).

## Instalación y ejecución

```bash
npm install
npm run dev
```

Abre la URL que muestra Vite (por defecto `http://localhost:5173`).

## Estructura del proyecto

```
src/
├── types.ts                  TreeNode recursivo (id, tag, name, description, length, children?)
├── data/
│   └── mathTree.ts           El árbol completo de datos
├── utils/
│   ├── path.ts                pathsEqual / isPrefix — comparar rutas (arrays de índices)
│   └── geometry.ts            Direcciones (raíz en esfera, hijos en cono) y
│                               nodeWorldTransform(path) para ubicar cualquier nodo en el mundo
├── hooks/
│   └── useTreeState.tsx      Estado: `path: number[]` = ruta de índices al nodo abierto actualmente
├── components/
│   ├── Vector.tsx             Vector genérico: eje + punta + nodo + etiqueta + animación
│   ├── VectorNode.tsx         Un nodo del árbol: se dibuja y, si está en la ruta activa, recurre en NodeList
│   ├── NodeList.tsx           Dibuja una lista de hermanos (raíz o hijos de cualquier nodo)
│   ├── CoreNode.tsx           Núcleo central "Mathematics"
│   ├── CameraRig.tsx          OrbitControls + zoom hacia el nodo al final de `path`, a cualquier profundidad
│   ├── Scene.tsx              Luces, grilla, ejes y raíz del árbol (<NodeList nodes={MATH_TREE} .../>)
│   ├── InfoPanel.tsx           Popup flotante con descripción y enlace "Ver en Wikipedia"
│   ├── BackButton.tsx         Sube un nivel en la ruta
│   ├── ExpandAllToggle.tsx    Interruptor "Abrir todos los nodos" (vista de constelación completa)
│   └── Overlay.tsx            Encabezado y texto de ayuda contextual
├── App.tsx                    Canvas de r3f + interfaz HTML superpuesta
├── main.tsx                   Punto de entrada de React
└── index.css                  Estilos del overlay
```

## El modelo recursivo, en una frase

El estado global ya no es "rama expandida + subtema activo" (dos niveles
fijos): es **`path: number[]`**, una ruta de índices desde la raíz hasta el
nodo abierto actualmente (ej. `[2, 1, 0]` = 3er nodo raíz → su 2do hijo →
el 1er hijo de ese hijo). `NodeList` decide qué hermano está "en la ruta"
comparando `path` contra la ruta de cada nodo, y `VectorNode` se llama a sí
mismo para dibujar los hijos del nodo activo — sin importar la profundidad.

## Cómo agregar más niveles de zoom

Solo edita `src/data/mathTree.ts`. Cualquier nodo (una rama principal, un
subtema, o un hijo de un subtema) puede tener su propio `children: [...]`
con la misma forma (`id`, `tag`, `name`, `description`, `length`, y
opcionalmente más `children`). No hay que tocar ningún componente: `NodeList`
y `VectorNode` son recursivos y ya leen `children` a cualquier profundidad.

Sugerencias:
- Usa `length` más chico en cada nivel más profundo (ej. ~4.3 en la raíz,
  ~1.8 en el segundo nivel, ~1.1 en el tercero) para que el "abanico" se vea
  proporcional al acercarse la cámara.
- El número de hijos por nodo es libre — no tiene que ser siempre 5.
- Si agregas o quitas ramas en la **raíz**, no hay que tocar nada más: las
  direcciones se recalculan solas con `fibonacciSphere`.

## Interacción

- **Arrastrar** → rotar la cámara.
- **Scroll / pellizco** → zoom.
- **Clic en un nodo** → la cámara se acerca a él y aparecen sus hijos (si tiene).
- **Clic en uno de esos hijos** → repite el mismo comportamiento: zoom + sus propios hijos, a cualquier profundidad.
- **Interruptor "Abrir todos los nodos"** (arriba a la derecha): abre todo el árbol a la vez, la cámara se aleja automáticamente para encuadrarlo completo (la distancia se calcula con `computeTreeRadius()` en `utils/geometry.ts`, así que se ajusta sola si agregas niveles) y puedes seguir rotando y haciendo zoom con OrbitControls. Al hacer clic en un nodo con todo abierto, la cámara sigue haciendo zoom hacia él y se muestra su popup; al retroceder vuelve a la vista completa.
- **Clic en el mismo nodo, en vacío, o en "← subir un nivel"** → retrocede un nivel en la ruta.
- **Popup con descripción y enlace a Wikipedia**: aparece automáticamente al seleccionar cualquier nodo, con un botón "Ver en Wikipedia ↗" que abre el artículo correspondiente en una pestaña nueva. Cada nodo puede definir `wikipediaTitle` en `mathTree.ts` con el título exacto del artículo (si se omite, se usa `name`, que no siempre coincide con un artículo real — por eso casi todos los nodos lo definen explícitamente).
# MathematicalNodes
