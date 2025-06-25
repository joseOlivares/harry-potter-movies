@echo off
echo Migrando proyecto a Angular 20...

echo.
echo 1. Eliminando node_modules y package-lock.json...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json

echo.
echo 2. Limpiando cache de npm...
npm cache clean --force

echo.
echo 3. Instalando nuevas dependencias...
npm install --force

echo.
echo 4. Actualizando Angular CLI globalmente (opcional)...
echo Para actualizar Angular CLI globalmente, ejecuta:
echo npm install -g @angular/cli@20

echo.
echo 5. Verificando la instalación...
ng version

echo.
echo Migración completada. Ejecuta 'npm start' para iniciar el servidor de desarrollo.
pause