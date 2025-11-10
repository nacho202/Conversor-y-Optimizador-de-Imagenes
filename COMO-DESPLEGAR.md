# 🚀 Cómo Desplegar en GitHub Pages

## ⚡ Inicio Rápido (5 minutos)

### **Opción 1: Script Automático (Recomendado)**

1. **Haz doble clic en:** `DEPLOY-GITHUB-PAGES.bat`

2. **Ingresa tu usuario de GitHub** cuando te lo pida

3. **El script hará todo automáticamente:**
   - Inicializa Git
   - Agrega tus archivos
   - Sube a GitHub
   - Te guía para activar Pages

4. **Sigue las últimas 3 instrucciones** que aparecen en pantalla

---

### **Opción 2: Manual (Paso a Paso)**

#### 1. Sube tu código a GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TU-USUARIO/imageoptimize.git
git branch -M main
git push -u origin main
```

#### 2. Activa GitHub Pages

1. Ve a: `https://github.com/TU-USUARIO/imageoptimize/settings/pages`
2. En **"Source"**: selecciona **"main"**
3. En **"Folder"**: selecciona **"/ (root)"**
4. Click **"Save"**

#### 3. Espera 5 minutos

⏳ GitHub tarda unos minutos en procesar la primera vez.

#### 4. Tu sitio estará en:

```
https://TU-USUARIO.github.io/imageoptimize/
```

---

## ✅ Checklist

```
[ ] Ejecuté DEPLOY-GITHUB-PAGES.bat
[ ] Ingresé mi usuario de GitHub
[ ] El repositorio es PÚBLICO
[ ] Activé Pages en Settings → Pages
[ ] Esperé 5 minutos
[ ] Visité mi URL: https://TU-USUARIO.github.io/imageoptimize/
```

---

## 🔧 Solución de Problemas

### Error 404

**Causas comunes:**
- ⏳ No esperaste 5 minutos → Espera y refresca
- 🔒 Repositorio privado → Hazlo público en Settings
- ❌ Pages no activado → Ve a Settings → Pages y actívalo
- 🌐 URL incorrecta → Verifica que uses tu usuario real

**Solución rápida:**
1. Ve a: `https://github.com/TU-USUARIO/imageoptimize/settings/pages`
2. Verifica que diga: **"✅ Your site is live at..."**
3. Si dice otra cosa, configura Source: main, Folder: /
4. Espera 5 minutos y refresca con `Ctrl + Shift + R`

---

## 💰 ¿Es Gratis?

**SÍ, 100% GRATIS para siempre.**

- ✅ Sin límite de tiempo
- ✅ Sin tarjeta de crédito
- ✅ Sin costos ocultos
- ✅ HTTPS incluido

El mensaje **"start free for 30 days"** que puedas ver es de **GitHub Copilot** (IA para código), **NO de GitHub Pages**.

GitHub Pages es gratis desde 2008 y usado por millones de developers.

---

## 🔄 Actualizar tu Sitio

Cuando hagas cambios en el futuro:

```bash
git add .
git commit -m "Actualización"
git push
```

¡GitHub Pages se actualiza automáticamente en 1-2 minutos!

---

## 🆘 ¿Necesitas Ayuda?

Si algo no funciona:

1. **Verifica que el repo sea público** (Settings → Change visibility)
2. **Verifica que Pages esté activado** (Settings → Pages)
3. **Espera 5 minutos completos** después de activar
4. **Refresca con Ctrl + Shift + R** (limpia caché)

Si sigue sin funcionar, verifica:
- ¿Los archivos están en el repositorio? (debe haber index.html en la raíz)
- ¿El nombre del repo es correcto en la URL?
- ¿El repositorio es público?

---

## 🎯 URLs Importantes

Una vez desplegado:

- **Tu sitio:** `https://TU-USUARIO.github.io/imageoptimize/`
- **Tu repo:** `https://github.com/TU-USUARIO/imageoptimize`
- **Settings Pages:** `https://github.com/TU-USUARIO/imageoptimize/settings/pages`

(Reemplaza `TU-USUARIO` con tu nombre de usuario real de GitHub)

---

## ✨ Listo!

Tu proyecto estará online con:
- ✅ HTTPS automático
- ✅ Gratis para siempre
- ✅ URL profesional para tu portfolio
- ✅ Deploy automático con cada cambio

**¡Comparte tu URL en tu CV y portfolio!** 🎉

