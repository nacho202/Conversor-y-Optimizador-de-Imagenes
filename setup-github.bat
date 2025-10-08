@echo off
chcp 65001 >nul
echo.
echo ═══════════════════════════════════════════════════════════════
echo   🚀 SETUP GITHUB - ImageOptimize
echo ═══════════════════════════════════════════════════════════════
echo.
echo Este script te ayudará a preparar tu proyecto para GitHub
echo.
pause
echo.

echo 📋 Paso 1: Inicializando Git...
git init
if %errorlevel% neq 0 (
    echo ❌ Error: Git no está instalado o no se encuentra en PATH
    echo    Descarga Git desde: https://git-scm.com/download/win
    pause
    exit /b 1
)
echo ✅ Git inicializado

echo.
echo 📋 Paso 2: Agregando archivos...
git add .
echo ✅ Archivos agregados

echo.
echo 📋 Paso 3: Creando primer commit...
git commit -m "🎨 Initial commit: ImageOptimize converter"
echo ✅ Commit creado

echo.
echo ═══════════════════════════════════════════════════════════════
echo   ✅ PREPARACIÓN COMPLETA
echo ═══════════════════════════════════════════════════════════════
echo.
echo 🌐 SIGUIENTE PASO: Crear repositorio en GitHub
echo.
echo    1. Ve a: https://github.com/new
echo    2. Repository name: imageoptimize
echo    3. Description: 🎨 Conversor y optimizador de imágenes moderno
echo    4. Marca como Public
echo    5. NO marques "Add a README file"
echo    6. Click "Create repository"
echo.
echo 📤 LUEGO EJECUTA: conectar-github.bat
echo.
pause

