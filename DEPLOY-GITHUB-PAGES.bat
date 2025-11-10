@echo off
chcp 65001 >nul
echo.
echo ═══════════════════════════════════════════════════════════════
echo   🚀 DEPLOY A GITHUB PAGES - ImageOptimize
echo ═══════════════════════════════════════════════════════════════
echo.
echo Este script te ayudará a subir tu proyecto a GitHub Pages
echo.
pause
echo.

echo 📋 Verificando Git...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git no está instalado
    echo    Descarga desde: https://git-scm.com/download/win
    pause
    exit /b 1
)
echo ✅ Git encontrado
echo.

set /p USUARIO="Ingresa tu nombre de usuario de GitHub: "
echo.

set /p REPO="Ingresa el nombre de tu repositorio (Conversor-y-Optimizador-de-Imagenes): "
echo.

echo 📋 Paso 1: Inicializando Git...
git init 2>nul
if %errorlevel% neq 0 (
    echo ⚠️  Git ya está inicializado
) else (
    echo ✅ Git inicializado
)
echo.

echo 📋 Paso 2: Agregando archivos...
git add .
echo ✅ Archivos agregados
echo.

echo 📋 Paso 3: Creando commit...
git commit -m "🎨 Deploy to GitHub Pages"
if %errorlevel% neq 0 (
    echo ⚠️  No hay cambios para commit
    echo    Continuando con el push...
) else (
    echo ✅ Commit creado
)
echo.

echo 📋 Paso 4: Conectando con GitHub...
git remote add origin https://github.com/%USUARIO%/%REPO%.git 2>nul
if %errorlevel% neq 0 (
    echo ⚠️  Remote ya existe, actualizando...
    git remote set-url origin https://github.com/%USUARIO%/%REPO%.git
)
echo ✅ Remote configurado
echo.

echo 📋 Paso 5: Configurando rama...
git branch -M main
echo ✅ Rama configurada
echo.

echo 📋 Paso 6: Subiendo a GitHub...
git push -u origin main
if %errorlevel% neq 0 (
    echo.
    echo ❌ Error al subir. Verifica que:
    echo    - El repositorio existe en GitHub
    echo    - Tu usuario es correcto: %USUARIO%
    echo.
    echo Crea el repositorio en: https://github.com/new
    echo    Nombre: %REPO%
    echo    Public ✅
    echo.
    pause
    exit /b 1
)
echo.

echo ═══════════════════════════════════════════════════════════════
echo   ✅ CÓDIGO SUBIDO A GITHUB
echo ═══════════════════════════════════════════════════════════════
echo.
echo 🌐 Tu repo: https://github.com/%USUARIO%/%REPO%
echo.
echo.
echo ═══════════════════════════════════════════════════════════════
echo   🚀 ACTIVAR GITHUB PAGES
echo ═══════════════════════════════════════════════════════════════
echo.
echo SIGUE ESTOS PASOS:
echo.
echo 1. Ve a: https://github.com/%USUARIO%/%REPO%/settings/pages
echo.
echo 2. En "Source":
echo    - Branch: main
echo    - Folder: / (root)
echo    - Click Save
echo.
echo 3. Espera 2-3 minutos
echo.
echo 4. Tu sitio estará en:
echo    https://%USUARIO%.github.io/%REPO%/
echo.
echo.
echo 💡 CONSEJO: Guarda esta URL para tu portfolio
echo.
pause
start https://github.com/%USUARIO%/%REPO%/settings/pages

