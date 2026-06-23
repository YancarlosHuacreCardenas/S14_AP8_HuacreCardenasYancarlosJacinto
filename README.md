# App Videojuegos 🎮

Plataforma web en línea para entusiastas de los videojuegos, construida con **Angular 19**. Esta aplicación cuenta con un sistema de rutas protegidas, un catálogo interactivo de videojuegos, sección de noticias gamer, formulario de contacto, y un sistema de autenticación (Login y Registro) con almacenamiento persistente en `localStorage`.

---

## 👤 Datos del Estudiante
* **Nombre Completo:** Yancarlos Jacinto Huacre Cárdenas
* **Curso:** Desarrollo de Aplicaciones Web
* **Proyecto:** Plataforma de Videojuegos Angular (Sesión 14 - AP8)

---

## 🚀 Características del Proyecto
La aplicación implementa los siguientes requisitos mínimos y avanzados:
1. **Angular Routing (Enrutamiento):** Navegación fluida de una sola página (SPA) entre las distintas secciones.
2. **Guardianes de Ruta (AuthGuard):** Protección de rutas privadas (`/inicio`, `/juegos`, `/noticias`, `/contacto`). Si un usuario no ha iniciado sesión, es redirigido automáticamente al formulario de `/login`.
3. **Formularios Reactivos (Angular Reactive Forms):**
   * **Login:** Con validaciones en tiempo real para formato de correo y contraseña (mínimo 6 caracteres).
   * **Registro:** Permite crear nuevos usuarios con validación de campos vacíos y correos duplicados.
   * **Contacto:** Formulario funcional para enviar mensajes o sugerencias.
4. **Almacenamiento Local (LocalStorage):** Las credenciales de nuevos registros se almacenan y validan de forma persistente.
5. **Diseño Visual Moderno:** Interfaz responsiva con temática oscura ("Dark Mode Gamer"), efectos hover y transiciones fluidas.

🔑 **Credenciales de Acceso por Defecto:**
* **Correo:** `admin@miapp.com`
* **Contraseña:** `123456`

---

## 🛠️ Ejecución Local

### Prerrequisitos
Tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior) y el CLI de Angular globalmente (`npm install -g @angular/cli`).

1. **Instalar Dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar Servidor de Desarrollo:**
   ```bash
   npm start
   ```
   Abra [http://localhost:4200](http://localhost:4200) en su navegador. La aplicación se recargará automáticamente al detectar cambios.

3. **Ejecutar Pruebas Unitarias:**
   ```bash
   npm test
   ```

---

## 📦 Compilación de Producción (Build)

Para generar los archivos estáticos listos para desplegar en producción, ejecute:
```bash
npm run build
```
Esto creará una carpeta llamada `dist/app-videojuegos/browser` en la raíz del proyecto conteniendo el código HTML, CSS y JS optimizado.

---

## 🌐 Despliegue en Render

Este proyecto está configurado para desplegarse de manera automatizada en **Render** como un **Static Site** utilizando el archivo `render.yaml` (Blueprint).

### Pasos para desplegar:
1. Sube tu código a un repositorio de **GitHub**.
2. Inicia sesión en [Render](https://render.com/).
3. Haz clic en **New** ➡️ **Blueprint** (o **Static Site** si deseas configurarlo manualmente).
4. Conecta tu repositorio de GitHub.
5. Si usas **Blueprint**, Render leerá el archivo `render.yaml` y configurará todo automáticamente:
   * **Build Command:** `npm run build`
   * **Publish Directory:** `dist/app-videojuegos/browser`
   * **Rewrite Rule:** Redirección de `/*` a `/index.html` (vital para que el enrutamiento de Angular no devuelva error 404 al recargar páginas).
6. Haz clic en **Apply** y espera a que Render compile y publique la aplicación. ¡Obtendrás una URL pública de inmediato!
