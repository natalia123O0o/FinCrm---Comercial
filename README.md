# FinCRM Landing — React + Vite + Motion

Conversión de los archivos `index.html`, `styles.css`, `tokens.css` y `script.js` aportados por la autora a una aplicación React. Se conservan la paleta, la tipografía, el enfoque visual, las secciones y los tres planes ($39.900, $79.900 y $129.900 COP/mes).

## 1. Requisitos

- Node.js 20.19+ o 22.12+ (consulta la versión con `node -v`)
- npm
- Visual Studio Code, opcional

## 2. Iniciar

Abre esta carpeta en VS Code; luego abre Terminal > New Terminal:

```bash
npm install
npm run dev
```

Vite indicará una dirección como `http://localhost:5173` para verla en el navegador.

Para comprobar la compilación antes de entregar o publicar:

```bash
npm run build
npm run preview
```

## 3. Estructura

```text
fincrm-landing-react/
  index.html                 Entrada HTML para React
  package.json               Dependencias y scripts
  vite.config.js             Configuración Vite
  .env.example               Plantilla para correo de contacto
  src/
    main.jsx                 Crea la raíz React e importa CSS
    App.jsx                  Secciones de la landing e interacciones
    data/content.js          Textos, módulos, precios y datos de prueba
    components/
      DashboardPreview.jsx   Dashboard con tabs animados
      CountUp.jsx            Contadores animados
      Reveal.jsx             Aparición al hacer scroll
      Logo.jsx               Logo FinCRM
    styles/
      tokens.css             Variables originales de marca
      styles.css             Estilos originales
      react-enhancements.css Ajustes para componentes y contacto
```

## 4. Animaciones incluidas

- Entrada progresiva de títulos y tarjetas al hacer scroll (`Reveal` con Motion).
- Dibujo animado de la línea naranja del inicio (SVG con Motion).
- Contadores de indicadores al hacerse visibles (`CountUp` con Motion).
- Pestañas Resumen / Clientes / Cartera / Ventas con cambios de contenido y transiciones (`AnimatePresence`).
- Gráfico de cartera que se traza y aparece progresivamente (Motion SVG).
- Barra de progreso de lectura en el borde superior (`useScroll`, `useSpring`).
- Microinteracciones al pasar por tarjetas y botones (CSS original).
- Menú móvil y barra de navegación compacta al desplazarse (React state).
- Adaptación al ajuste de accesibilidad `prefers-reduced-motion`.

## 5. Configurar correo de contacto

El proyecto **no incluye backend de contacto**. El formulario abre el programa de correo del visitante con el mensaje preparado, solo si defines un correo real.

1. Duplica `.env.example` y renómbralo `.env`.
2. Define `VITE_CONTACT_EMAIL=tu-correo-real@dominio.com`.
3. Reinicia `npm run dev`.



