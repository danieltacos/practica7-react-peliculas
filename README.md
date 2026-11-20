# Práctica 7 - App de Películas con React

Aplicación web de películas desarrollada con **React** y **Vite**. Consume la API de **TMDB**, muestra un listado de películas en tarjetas y permite ver el detalle de cada una.

## Estudiante
- Daniel Munguía de la Rosa

**Profesor:** Zeus Emanuel Gutiérrez Cobián
**Materia:** Desarrollo de Aplicaciones Web en la Nube y Móviles
**Calendario:** 2026B
**Institución:** CUCEI – Universidad de Guadalajara

## Objetivo
Desarrollar una aplicación web SPA en React con Vite que consuma información de una API de películas, muestre un listado y el detalle de cada película, use navegación con React Router, se gestione con Git y GitHub y se publique en Netlify.

## Tecnologías utilizadas
- React
- Vite
- React Router DOM
- JavaScript (ES6+)
- CSS
- API de TMDB (The Movie Database)
- Git y GitHub
- Netlify

## Estructura del proyecto
```
src/
  components/
    Footer.jsx / Footer.css         → Pie de página con datos del curso
    MovieCard.jsx / MovieCard.css   → Tarjeta individual de película
    MovieGrid.jsx / MovieGrid.css   → Listado de películas desde la API
  pages/
    LandingPage.jsx                 → Página principal
    MovieDetails.jsx / .css         → Vista de detalle de una película
  routers/
    AppRouter.jsx                   → Configuración de rutas
  services/
    httpClient.js                   → Función para consumir la API
  utils/
    getMovieImg.js                  → Construye la URL de los pósters
  img/                              → Imagen placeholder y escudo CUCEI
  App.jsx
  main.jsx
  index.css
public/
  _redirects                        → Redirección para rutas en Netlify
```

## Instalación y ejecución local
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/TU_USUARIO/practica7-react-peliculas.git
   cd practica7-react-peliculas
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Crear un archivo `.env` en la raíz con la API key de TMDB:
   ```
   VITE_TMDB_API_KEY=tu_api_key
   ```
4. Ejecutar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abrir `http://localhost:5173` en el navegador.

## Rutas utilizadas
| Ruta | Descripción |
|---|---|
| `/` | Página principal con el listado de películas |
| `/movies/:movieId` | Detalle de la película seleccionada |

## API utilizada
Se utiliza la API de **TMDB** (https://www.themoviedb.org):
- `GET /discover/movie` → listado de películas
- `GET /movie/{movieId}` → detalle de una película
- Imágenes: `https://image.tmdb.org/t/p/w500{poster_path}`

La API key se guarda en una variable de entorno (`VITE_TMDB_API_KEY`) y no se sube al repositorio.

## Funcionamiento
- La página principal muestra una cuadrícula de tarjetas con el póster y el título de cada película.
- Al dar clic en una tarjeta se navega a `/movies/:movieId`, donde se muestran el póster, el título, los géneros, la fecha de estreno y la descripción.
- El botón "← Volver" regresa al listado.
- El diseño es responsivo y se adapta a pantallas pequeñas.
- El pie de página muestra los datos del estudiante, el profesor, la materia y la institución.

## Enlaces
- **Repositorio:** https://github.com/danieltacos/practica7-react-peliculas.git
- **Despliegue en Netlify:** https://appdepeliculasconreact.netlify.app/

## Conclusiones
Con esta práctica aprendí a crear un proyecto con React y Vite y a organizarlo en componentes, páginas, servicios y utilidades. Usé los hooks `useState`, `useEffect` y `useParams` para manejar el estado, consumir una API externa y leer parámetros de la URL. Con React Router configuré la navegación entre el listado y el detalle sin recargar la página. También practiqué el uso de variables de entorno para proteger la API key, el flujo de trabajo con Git y GitHub mediante commits que reflejan el avance, y el despliegue de una SPA en Netlify, incluida la configuración de `_redirects` para que las rutas funcionen en producción.