# 🚀 Guía de Despliegue - ImageOptimize

Esta guía te ayudará a subir tu proyecto a GitHub y desplegarlo en Vercel en menos de 5 minutos.

## 📋 Prerrequisitos

- Cuenta de GitHub ([crear cuenta](https://github.com/signup))
- Cuenta de Vercel ([crear cuenta](https://vercel.com/signup)) - puedes iniciar sesión con GitHub
- Git instalado en tu computadora

## 🔧 Paso 1: Preparar Git Local

Abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
# Inicializar repositorio Git
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "🎨 Initial commit: ImageOptimize converter"
```

## 🌐 Paso 2: Crear Repositorio en GitHub

### Opción A: Desde la Web
1. Ve a [GitHub](https://github.com)
2. Haz clic en el botón **"+"** (arriba a la derecha) → **"New repository"**
3. Configura tu repositorio:
   - **Repository name**: `imageoptimize` (o el nombre que prefieras)
   - **Description**: `🎨 Conversor y optimizador de imágenes moderno con soporte para WebP, AVIF, JPEG y PNG`
   - **Public** (para que aparezca en tu portfolio)
   - ❌ NO marques "Add a README file" (ya tienes uno)
4. Haz clic en **"Create repository"**

### Opción B: Desde la Terminal (más rápido)
Si tienes GitHub CLI instalado:
```bash
gh repo create imageoptimize --public --source=. --remote=origin --push
```

## 📤 Paso 3: Subir Código a GitHub

Si creaste el repo desde la web, copia y pega estos comandos (GitHub te los mostrará):

```bash
# Agregar el repositorio remoto (reemplaza TU-USUARIO con tu nombre de usuario)
git remote add origin https://github.com/TU-USUARIO/imageoptimize.git

# Cambiar a rama main
git branch -M main

# Subir el código
git push -u origin main
```

## 🚀 Paso 4: Desplegar en Vercel

### Método 1: Desde la Web (Recomendado)

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **"Login"** e inicia sesión con GitHub
3. Haz clic en **"Add New..."** → **"Project"**
4. Busca tu repositorio `imageoptimize` en la lista
5. Haz clic en **"Import"**
6. Configuración:
   - **Project Name**: `imageoptimize` (o el que prefieras)
   - **Framework Preset**: `Other` (o déjalo detectar automáticamente)
   - **Root Directory**: `./` (dejar por defecto)
   - **Build Command**: Dejar vacío
   - **Output Directory**: Dejar vacío
7. Haz clic en **"Deploy"**

¡Listo! En 30-60 segundos tu sitio estará en vivo 🎉

### Método 2: Desde la Terminal (Avanzado)

Si tienes Vercel CLI instalado:

```bash
# Instalar Vercel CLI (solo la primera vez)
npm i -g vercel

# Iniciar sesión
vercel login

# Desplegar
vercel

# Desplegar a producción
vercel --prod
```

## 🔗 URLs Resultantes

Después del despliegue tendrás:

- **URL de producción**: `https://imageoptimize.vercel.app` (o tu nombre personalizado)
- **URL del repo**: `https://github.com/TU-USUARIO/imageoptimize`

## 🎯 Siguientes Pasos

### 1. Configurar Dominio Personalizado (Opcional)
En Vercel:
- Ve a tu proyecto → **Settings** → **Domains**
- Agrega tu dominio personalizado si tienes uno

### 2. Agregar al Portfolio
Agrega estos enlaces en tu portfolio:

```html
<!-- Live Demo -->
<a href="https://imageoptimize.vercel.app" target="_blank">Ver Demo</a>

<!-- Código Fuente -->
<a href="https://github.com/TU-USUARIO/imageoptimize" target="_blank">Ver Código</a>
```

### 3. Agregar Badges al README
Agrega estos badges al inicio de tu README.md:

```markdown
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/TU-USUARIO/imageoptimize)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)
```

## 🔄 Actualizar el Proyecto

Cuando hagas cambios en el futuro:

```bash
# 1. Hacer cambios en tu código
# 2. Guardar los cambios en Git
git add .
git commit -m "✨ Descripción de tus cambios"
git push

# 3. Vercel desplegará automáticamente los cambios
```

**¡Vercel hace auto-deploy!** Cada vez que hagas `git push`, Vercel desplegará automáticamente la nueva versión.

## 📊 Monitoreo

En el dashboard de Vercel podrás ver:
- ✅ Analytics (visitas, países, dispositivos)
- 📈 Performance metrics
- 🔍 Deploy logs
- 🌍 Edge network locations

## ⚡ Optimizaciones de Vercel

Vercel automáticamente:
- ✅ Habilita HTTPS
- ✅ Distribuye globalmente con CDN
- ✅ Comprime archivos
- ✅ Caching inteligente
- ✅ Optimiza imágenes del sitio

## 🐛 Problemas Comunes

### Error: "repository already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/imageoptimize.git
```

### Error: JSZip no carga
- Vercel sirve el sitio con HTTPS, así que el CDN de JSZip funcionará perfecto
- Si prefieres, puedes descargar JSZip y servirlo localmente

### Error: "failed to push some refs"
```bash
git pull origin main --rebase
git push origin main
```

## 💡 Tips para el Portfolio

1. **Captura de pantalla**: Toma screenshots para tu portfolio
2. **Demo video**: Graba un GIF mostrando la funcionalidad
3. **README visual**: Agrega imágenes al README de GitHub
4. **SEO**: Actualiza meta tags con tu URL de Vercel

## 📱 Compartir en Redes

Comparte tu proyecto:

```
🎨 Acabo de crear ImageOptimize - un conversor de imágenes moderno

✨ Características:
• Convierte a WebP, AVIF, JPEG, PNG
• Hasta 30 imágenes simultáneas
• Descarga automática en ZIP
• 100% procesamiento local
• Interfaz moderna y responsiva

🔗 Demo: https://imageoptimize.vercel.app
💻 Código: https://github.com/TU-USUARIO/imageoptimize

#WebDev #JavaScript #Portfolio
```

---

¡Listo! Tu proyecto estará online y lucirá profesional en tu portfolio 🚀

