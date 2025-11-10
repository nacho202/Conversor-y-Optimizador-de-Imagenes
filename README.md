# 🎨 ImageOptimize - Conversor y Optimizador de Imágenes

Una aplicación web moderna y eficiente para convertir y optimizar imágenes en múltiples formatos, construida con tecnologías web nativas.

![ImageOptimize](https://img.shields.io/badge/status-active-success.svg)
![Railway](https://img.shields.io/badge/Railway-0B0D0E?logo=railway&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Características

- 📤 **Carga Múltiple**: Procesa hasta 30 imágenes simultáneamente
- 🎯 **Drag & Drop**: Interfaz intuitiva de arrastrar y soltar
- 🔄 **Múltiples Formatos**: Convierte a WebP, AVIF, JPEG y PNG
- 📊 **Análisis en Tiempo Real**: Visualiza el ahorro de espacio instantáneamente
- ⚙️ **Control de Calidad**: Ajusta la compresión entre 10% y 100%
- 📦 **Descarga Inteligente**: Descarga automática en ZIP cuando hay 2+ imágenes
- 💾 **Descarga Individual**: Una sola imagen se descarga directamente
- 🎨 **Interfaz Moderna**: Diseño oscuro con gradientes y animaciones fluidas
- 📱 **Responsive**: Funciona perfectamente en todos los dispositivos
- ⚡ **100% Cliente**: Procesamiento local, sin necesidad de servidor

## 🚀 Demo en Vivo

**🌐 Live Demo**: [Próximamente]

**💻 Desarrollo Local**: Abre `index.html` en tu navegador favorito para probar la aplicación.

### 🚀 Desplegar en GitHub Pages (GRATIS):
- 🤖 **Script automático**: Ejecuta `DEPLOY-GITHUB-PAGES.bat`
- 📘 **Guía completa**: Lee [COMO-DESPLEGAR.md](COMO-DESPLEGAR.md)

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y moderna
- **CSS3**: 
  - CSS Grid y Flexbox para layouts responsivos
  - Variables CSS para theming consistente
  - Animaciones y transiciones fluidas
  - Gradientes lineales para diseño visual atractivo
- **JavaScript ES6+**:
  - Canvas API para procesamiento de imágenes
  - File API para manejo de archivos
  - Blob API para generación de archivos
  - Async/Await para operaciones asíncronas
  - Promise-based architecture
- **JSZip**: Librería para crear archivos ZIP en el navegador

### APIs del Navegador
- **Canvas API**: Conversión y procesamiento de imágenes
- **File API**: Lectura de archivos del sistema
- **Drag & Drop API**: Interfaz de usuario intuitiva
- **Blob API**: Creación de archivos descargables
- **URL API**: Generación de URLs temporales

### Librerías Externas
- **JSZip 3.10.1**: Compresión de múltiples imágenes en archivo ZIP

## 📋 Funcionalidades Detalladas

### 1. Carga de Imágenes
- Soporte para PNG, JPG, JPEG, GIF, BMP
- Límite de 30 imágenes por sesión
- Vista previa instantánea de las imágenes cargadas
- Validación de tipos de archivo

### 2. Conversión de Formatos
- **WebP**: Formato moderno con excelente compresión
- **AVIF**: Última generación de compresión de imágenes
- **JPEG**: Formato universal con alta compatibilidad
- **PNG**: Sin pérdida de calidad, ideal para transparencias

### 3. Control de Calidad
- Slider interactivo del 10% al 100%
- Actualización en tiempo real del valor
- Diferentes algoritmos según el formato

### 4. Estadísticas
- Tamaño original vs. tamaño convertido
- Porcentaje de reducción por imagen
- Estadísticas globales de todas las conversiones
- Espacio total ahorrado

### 5. Descarga Inteligente
- **1 imagen**: Descarga directa del archivo
- **2+ imágenes**: Descarga automática en formato ZIP
- Preserva los nombres originales de los archivos
- Agrega la extensión correcta automáticamente
- Nombre del ZIP incluye formato y fecha: `imagenes-webp-2025-10-08.zip`
- Carpeta organizada dentro del ZIP: `imagenes-convertidas/`
- Ejemplo: `foto.jpg` → `foto.webp`

## 💻 Instalación y Uso

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/TU-USUARIO/imageoptimize.git

# Navegar al directorio
cd imageoptimize

# Abrir en el navegador
# Simplemente abre index.html en tu navegador favorito
```

### Despliegue en Railway
```bash
# 1. Sube tu código a GitHub
git init
git add .
git commit -m "Initial commit"
git push

# 2. Ve a railway.app
# 3. New Project → Deploy from GitHub repo
# 4. Selecciona tu repositorio
# 5. ¡Listo! Railway lo desplegará automáticamente
```

Para una guía completa, ejecuta `setup-railway.bat` o lee [DEPLOY-RAILWAY.md](DEPLOY-RAILWAY.md)

### Uso
1. **Cargar Imágenes**: Arrastra archivos o haz clic en la zona de carga
2. **Seleccionar Formato**: Elige entre WebP, AVIF, JPEG o PNG
3. **Ajustar Calidad**: Mueve el slider según tu necesidad
4. **Convertir**: Haz clic en "Convertir Imágenes"
5. **Descargar**: Descarga todas las imágenes procesadas

## 🎨 Diseño y UX

### Paleta de Colores
- **Fondo**: `#0f0f1e` - Oscuro profundo
- **Superficie**: `#1a1a2e` - Gris oscuro
- **Primario**: Gradiente `#667eea` → `#764ba2`
- **Secundario**: Gradiente `#f093fb` → `#f5576c`
- **Éxito**: Gradiente `#4facfe` → `#00f2fe`

### Características Visuales
- Gradientes vibrantes en elementos clave
- Animaciones suaves y no intrusivas
- Feedback visual en todas las interacciones
- Estados de hover y active bien definidos
- Diseño card-based para mejor organización

## 📱 Compatibilidad

### Navegadores Modernos
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Soporte de Formatos
- **WebP**: Soportado en todos los navegadores modernos
- **AVIF**: Chrome 85+, Firefox 93+ (con fallback automático a WebP)
- **JPEG/PNG**: Soporte universal

## 🔧 Características Técnicas

### Arquitectura
```
imageoptimize/
├── index.html                  # Estructura HTML
├── style.css                   # Estilos y animaciones
├── script.js                   # Lógica de la aplicación
├── favicon.svg                 # Ícono de la aplicación
├── package.json                # Metadatos del proyecto
├── .gitignore                  # Archivos ignorados por Git
├── README.md                   # Documentación
│
├── 📁 .github/workflows/
│   └── deploy.yml              # GitHub Actions config
│
├── 🚀 Despliegue:
├── COMO-DESPLEGAR.md           # Guía completa de GitHub Pages
└── DEPLOY-GITHUB-PAGES.bat     # Script automático Windows
```

### Estado de la Aplicación
```javascript
state = {
    files: [],              // Archivos cargados
    convertedImages: [],    // Imágenes procesadas
    selectedFormat: 'webp', // Formato seleccionado
    quality: 0.8           // Calidad de compresión
}
```

### Flujo de Procesamiento
1. Usuario carga imágenes → Validación de cantidad y tipo
2. Imágenes se muestran con preview → Usuario selecciona formato y calidad
3. Canvas procesa cada imagen → Conversión al formato elegido
4. Cálculo de estadísticas → Muestra ahorro de espacio
5. Descarga de archivos → Nombres preservados con nueva extensión

## 🎯 Casos de Uso

### Para Desarrolladores Web
- Optimizar imágenes antes de subirlas al sitio
- Convertir assets a formatos modernos
- Reducir el peso de imágenes para mejor rendimiento

### Para Diseñadores
- Preparar imágenes para diferentes plataformas
- Comparar tamaños entre formatos
- Optimizar portfolios y presentaciones

### Para Creadores de Contenido
- Reducir el peso de imágenes para redes sociales
- Optimizar fotos para blogs y artículos
- Preparar imágenes para newsletters

## 🌐 Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse en **GitHub Pages (100% GRATIS)**:

### ⚡ Inicio Rápido:

**Opción 1 - Script Automático (Recomendado):**
```bash
# Haz doble clic en:
DEPLOY-GITHUB-PAGES.bat
```

**Opción 2 - Manual:**
1. Sube el código a GitHub
2. Ve a Settings → Pages
3. Activa Pages (Source: main, Folder: /)
4. Espera 5 minutos
5. Tu sitio estará en: `https://tu-usuario.github.io/imageoptimize/`

📘 **Guía completa**: [COMO-DESPLEGAR.md](COMO-DESPLEGAR.md)

### ✅ Por qué GitHub Pages:
- 🆓 **100% gratis** para siempre (sin tarjeta de crédito)
- 🔒 **HTTPS automático** incluido
- 🚀 **Deploy automático** con cada push
- 🌐 **CDN global** para carga rápida
- 💼 **Perfecto para portfolios**

## 🚀 Mejoras Futuras

- [ ] Soporte para redimensionamiento de imágenes
- [ ] Modo de comparación lado a lado
- [ ] Presets de optimización (web, móvil, print)
- [ ] Soporte para más formatos (JPEG XL, etc.)
- [ ] Historial de conversiones
- [ ] Modo claro/oscuro
- [ ] Progress bar para creación del ZIP
- [ ] Opción de descarga individual dentro del lote

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - puedes usarlo libremente en tu portfolio.

## 👤 Autor

Desarrollado como proyecto de portfolio para demostrar habilidades en:
- Desarrollo Frontend moderno
- Manipulación de Canvas y APIs del navegador
- Diseño UI/UX contemporáneo
- JavaScript vanilla avanzado
- Procesamiento de archivos del lado del cliente

---

⭐ Si te gusta este proyecto, no olvides darle una estrella!

