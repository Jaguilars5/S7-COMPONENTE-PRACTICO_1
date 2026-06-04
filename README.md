# 🏔️ Zaruma Turismo — Landing Page

Aplicación web de tipo landing page para la promoción turística de **Zaruma, la Sultana de El Oro (Ecuador)**. Desarrollada con **React 19**, **TypeScript 6** y **Vite 8**.

## ✨ Características principales

- **Landing page completa** con secciones de atractivos turísticos, gastronomía, biodiversidad, actividades, hospedaje y testimonios.
- **Formulario de contacto** con validación del lado del cliente que prepara mensajes preescritos para WhatsApp o correo electrónico dirigidos a los hoteles registrados.
- **Sistema de diseño propio** con paleta de colores cálidos (dorados, verdes, cremas), tipografía personalizada (Playfair Display + Inter) y componentes reutilizables (botones, tarjetas, campos de formulario).
- **Página de documentación del sistema de diseño** con muestras visuales de colores, tipografía, espaciado, sombras y componentes.
- **Diseño responsive** con navegación adaptativa (menú móvil tipo sidebar).
- **SEO y Open Graph** optimizados para redes sociales y motores de búsqueda.
- **React Compiler** habilitado para optimización de renderizado.

## 🧱 Estructura del proyecto

```plaintext
src/
├── App.tsx                          # Punto de entrada de la app
├── main.tsx                         # Mount del DOM
├── assets/img/                      # Imágenes del proyecto
│   ├── hotels/                      # Fotos de hoteles
│   ├── CASAS-PATRIMONIALES-1.jpg
│   ├── CENTRO-HISTORICO-1.jpg
│   ├── MINAS-1.jpg
│   ├── MIRADORES-1.jpg
│   ├── cascadas-1.jpg
│   ├── el-tigrillo.jpg
│   └── iglesia-de-zaruma.jpg
├── components/
│   ├── buttons/
│   │   └── Button.tsx               # Botón con variantes (primary, secondary, ghost, green)
│   ├── cards/
│   │   └── Card.tsx                 # Tarjeta reutilizable con variantes
│   ├── forms/
│   │   ├── FormInput.tsx            # Campo de texto con validación
│   │   ├── FormSelect.tsx           # Selector con opciones y validación
│   │   └── FormTextarea.tsx         # Área de texto con validación
│   ├── layout/
│   │   ├── Footer.tsx               # Pie de página con enlaces y contacto
│   │   ├── Header.tsx               # Encabezado fijo con navegación
│   │   ├── Layout.tsx               # Layout principal (Header + Outlet + Footer)
│   │   └── Sidebar.tsx              # Sidebar de navegación móvil
│   └── sections/
│       ├── ActivitiesSection.tsx    # Actividades disponibles
│       ├── AttractionsSection.tsx   # Atractivos turísticos
│       ├── BiodiversitySection.tsx  # Biodiversidad y clima (tabs flora/fauna)
│       ├── CtaSection.tsx           # Llamado a la acción
│       ├── GastronomySection.tsx    # Gastronomía tradicional
│       ├── HeroSection.tsx          # Hero principal con estadísticas
│       ├── HotelsSection.tsx        # Hospedaje colonial
│       └── TestimonialsSection.tsx  # Testimonios de visitantes
├── data/                            # Datos estáticos del contenido
│   ├── activities.ts
│   ├── attractions.ts
│   ├── biodiversity.ts
│   ├── cta.ts
│   ├── footer.ts
│   ├── gastronomy.ts
│   ├── hero.ts
│   ├── hotels.ts
│   ├── navigation.ts
│   ├── testimonials.ts
│   └── tours.ts
├── hooks/
│   └── useForm.ts                   # Hook personalizado de validación de formularios
├── pages/
│   ├── DesignSystem/
│   │   └── DesignSystemPage.tsx     # Documentación del sistema de diseño
│   ├── Form/
│   │   ├── FormPage.tsx             # Página del formulario de contacto
│   │   └── FormSuccess.tsx          # Pantalla de éxito del formulario
│   └── Landing/
│       └── LandingPage.tsx          # Página principal (landing)
├── routes/
│   └── AppRouter.tsx                # Configuración de rutas (React Router)
├── styles/
│   ├── root.css                     # Variables CSS (colores, tipografía, sombras)
│   ├── colors.css                   # Clases utilitarias de color
│   ├── layout.css                   # Estilos de layout (header, footer, contenedores)
│   ├── components.css               # Estilos de componentes (botones, tarjetas, inputs)
│   ├── pages.css                    # Estilos específicos de páginas
│   └── styles.css                   # Punto de entrada de estilos
├── types/
│   ├── footer.ts
│   ├── form.ts
│   ├── hotel.ts
│   ├── landing.ts
│   └── navigation.ts
└── utils/
```

## 🚀 Tecnologías

| Herramienta           | Versión |
| --------------------- | ------- |
| React                 | ^19.2.6 |
| TypeScript            | ~6.0.2  |
| Vite                  | ^8.0.12 |
| React Router          | ^7.16.0 |
| Lucide React (iconos) | ^1.17.0 |
| ESLint                | ^10.3.0 |
| pnpm (gestor)         | —       |

## 🛠️ Scripts disponibles

```bash
# Desarrollo — inicia el servidor con HMR
pnpm dev

# Producción — compila TypeScript y construye assets
pnpm build

# Vista previa — previsualiza la compilación de producción
pnpm preview

# Linting — ejecuta ESLint sobre el proyecto
pnpm lint
```

## 🧪 React Compiler

El proyecto utiliza el **React Compiler** (vía `babel-plugin-react-compiler`) para optimizar automáticamente el renderizado de componentes. Está integrado mediante el preset `reactCompilerPreset` de `@vitejs/plugin-react` junto con `@rolldown/plugin-babel`.

## 🗺️ Rutas

| Ruta             | Página                 |
| ---------------- | ---------------------- |
| `/`              | Landing page principal |
| `/reservar`      | Formulario de contacto |
| `/design-system` | Sistema de diseño      |

## 🎨 Sistema de diseño

El proyecto incluye un sistema de diseño completo basado en CSS custom properties:

- **Paleta de colores:** Dorados (#c59b27), verdes (#388e3c), cremas, grises cálidos y negro cálido.
- **Tipografía:** Playfair Display para títulos + Inter para cuerpo de texto.
- **Componentes:** Botones (4 variantes), tarjetas (4 variantes), campos de formulario (3 tipos) con estados de error y validación.
- **Página de documentación:** Accesible en `/design-system` con muestras visuales de todos los tokens.

## 🌐 SEO

Meta etiquetas optimizadas en `index.html`:

- Open Graph (Facebook, LinkedIn)
- Twitter Cards
- Meta description y keywords
- Link canónico
- Idioma: español (es)

## 📸 Capturas de pantalla

Las imágenes de los atractivos turísticos y hoteles se encuentran en `src/assets/img/`. Se utiliza un sistema de `onError` con imagen de respaldo para los hoteles.

---

Desarrollado para la promoción turística de **Zaruma, El Oro — Ecuador**. Patrimonio Cultural del Ecuador desde 1990, declarada Ciudad de Interés Turístico Nacional.
