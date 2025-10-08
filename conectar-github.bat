@echo off
chcp 65001 >nul
echo.
echo ═══════════════════════════════════════════════════════════════
echo   🔗 CONECTAR A GITHUB - ImageOptimize
echo ═══════════════════════════════════════════════════════════════
echo.

set /p USUARIO="Ingresa tu nombre de usuario de GitHub: "

echo.
echo 📋 Conectando con GitHub...
git remote add origin https://github.com/%USUARIO%/imageoptimize.git
if %errorlevel% neq 0 (
    echo.
    echo ⚠️  El remote ya existe. Actualizando...
    git remote set-url origin https://github.com/%USUARIO%/imageoptimize.git
)
echo ✅ Remote configurado

echo.
echo 📋 Configurando rama principal...
git branch -M main
echo ✅ Rama configurada

echo.
echo 📋 Subiendo código a GitHub...
git push -u origin main
if %errorlevel% neq 0 (
    echo.
    echo ❌ Error al subir. Verifica que:
    echo    - El repositorio existe en GitHub
    echo    - Tu nombre de usuario es correcto: %USUARIO%
    echo    - Tienes permisos de escritura
    pause
    exit /b 1
)

echo.
echo ═══════════════════════════════════════════════════════════════
echo   ✅ CÓDIGO SUBIDO A GITHUB
echo ═══════════════════════════════════════════════════════════════
echo.
echo 🌐 Tu repositorio: https://github.com/%USUARIO%/imageoptimize
echo.
echo 🚀 SIGUIENTE PASO: Desplegar en Vercel
echo.
echo    1. Ve a: https://vercel.com/new
echo    2. Inicia sesión con GitHub
echo    3. Busca "imageoptimize" en la lista
echo    4. Click "Import"
echo    5. Click "Deploy"
echo.
echo 🎉 ¡Tu sitio estará en línea en menos de 1 minuto!
echo.
pause

