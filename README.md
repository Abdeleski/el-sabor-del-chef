# El Sabor del Chef - Restaurant Website

Una página web profesional para el restaurante "El Sabor del Chef", especializado en cocina mediterránea fusión.

## Características

- **Diseño Profesional**: Interfaz moderna con tema mediterráneo
- **Código QR**: Sistema de menú digital accesible por código QR
- **Responsive**: Adaptado para móviles, tablets y desktop
- **Secciones Completas**: Hero, Nosotros, Menú, Galería, Horarios, Contacto
- **Animaciones Suaves**: Transiciones elegantes y efectos visuales

## Tecnologías

### Frontend
- **React 18** con TypeScript
- **Vite** para desarrollo y build
- **Tailwind CSS** para estilos
- **Radix UI** componentes de interfaz
- **TanStack Query** manejo de estado del servidor
- **Wouter** enrutamiento ligero

### Backend
- **Node.js** con Express.js
- **TypeScript** 
- **QRCode** generación de códigos QR
- **Drizzle ORM** para base de datos

## Instalación y Uso

1. **Clonar el repositorio:**
   ```bash
   git clone [URL-DE-TU-REPO]
   cd el-sabor-del-chef
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```

4. **Construir para producción:**
   ```bash
   npm run build
   ```

## Estructura del Proyecto

```
├── client/              # Frontend React
│   ├── src/
│   │   ├── components/  # Componentes React
│   │   ├── pages/       # Páginas de la aplicación
│   │   └── lib/         # Utilidades y configuración
├── server/              # Backend Express
├── shared/              # Esquemas compartidos
├── attached_assets/     # Archivos estáticos (menú PDF)
└── README.md
```

## Funcionalidades Principales

### Sistema de Menu Digital
- Código QR que dirige al menú PDF
- Endpoint `/api/menu/qr` para generar el código QR
- Endpoint `/api/menu/pdf` para servir el menú

### Secciones de la Web
- **Hero**: Presentación principal con llamadas a la acción
- **Nosotros**: Historia y valores del restaurante
- **Menú**: Código QR y acceso al menú digital
- **Galería**: Imágenes de platos y ambiente
- **Horarios**: Información de horarios y servicios
- **Contacto**: Ubicación y datos de contacto

## Información del Restaurante

- **Nombre**: El Sabor del Chef
- **Ubicación**: Calle Gourmet 123, Ciudad Sabores
- **Teléfono**: +34 912 345 678
- **Especialidad**: Cocina mediterránea fusión
- **Capacidad**: 20 mesas (76 personas)

## Despliegue

El proyecto está optimizado para despliegue en plataformas como:
- Replit
- Vercel
- Netlify
- Heroku

## Licencia

© 2024 El Sabor del Chef. Todos los derechos reservados.