# Instrucciones de Instalación: Control de Finanzas

Esta es una guía rápida para desplegar e instalar la Progressive Web App (PWA) "Control de Finanzas" en tus dispositivos móviles y de escritorio.

---

## ⚠️ Requisito Indispensable: Servidor Seguro (HTTPS)

Para que la funcionalidad de instalación y el modo offline funcionen, la aplicación **DEBE** ser alojada en un servidor seguro. La URL final debe empezar con `https://`.

#### ¿Por qué es necesario?
Por seguridad. Los navegadores solo permiten que los *Service Workers* (la tecnología que hace que la app funcione sin conexión) se registren en conexiones seguras para proteger tus datos.

#### ¿Cómo subir la app a un servidor seguro? (Método Fácil y Gratuito)
La forma más sencilla es usar un servicio de despliegue como **Netlify**.

1.  **Prepara los archivos**: Asegúrate de que los tres archivos (`index.html`, `manifest.json`, `sw.js`) estén juntos en una misma carpeta.
2.  **Comprime la carpeta**: Crea un único archivo `.zip` a partir de esa carpeta.
3.  **Despliega en Netlify**:
    * Crea una cuenta gratuita en [Netlify.com](https://www.netlify.com/).
    * En tu panel principal, busca la sección para desplegar un sitio y simplemente **arrastra y suelta tu archivo `.zip`**.
4.  **Obtén tu URL**: En menos de un minuto, Netlify te dará una URL segura y única (ej: `https://nombre-aleatorio.netlify.app`). ¡Esa es la URL que usarás para instalar tu app!

---

## ⚙️ Cómo Instalar la Aplicación

Una vez que tengas tu URL `https://`, ábrela en el navegador de tu dispositivo y sigue los pasos correspondientes.

### 📱 En Dispositivos Móviles

#### En Android (con Google Chrome)
1.  Abre Google Chrome y navega a tu URL.
2.  Espera unos segundos. Puede que aparezca un aviso en la parte inferior de la pantalla para **"Instalar aplicación"**.
3.  Si no aparece, pulsa el **menú de los tres puntos (⋮)** en la esquina superior derecha.
4.  Selecciona la opción **"Instalar aplicación"** o **"Agregar a la pantalla principal"**.
5.  Confirma la acción. El ícono de la app aparecerá en tu pantalla de inicio.

#### En iPhone/iPad (con Safari)
1.  Abre Safari y navega a tu URL.
2.  Pulsa el botón de **"Compartir"** (el ícono de un cuadrado con una flecha hacia arriba).
3.  En el menú que se despliega, desliza hacia abajo y busca la opción **"Agregar a la pantalla de inicio"**.
4.  Confirma el nombre del ícono y pulsa **"Agregar"**. La app aparecerá en tu pantalla de inicio.

### 🖥️ En el Escritorio (PC o Mac)

Esto funciona en navegadores modernos como Google Chrome, Microsoft Edge y Brave.

1.  Abre el navegador y navega a tu URL.
2.  En la barra de direcciones, a la derecha, busca un **ícono de una pantalla con una flecha hacia abajo**.
3.  Haz clic en ese ícono.
4.  Se abrirá una ventana de confirmación. Haz clic en el botón **"Instalar"**.
5.  La aplicación se abrirá en su propia ventana y se añadirá a tu lista de programas/aplicaciones.

¡Listo! 🎉 Ahora tienes la aplicación instalada, accesible directamente desde un ícono como cualquier otra app nativa.