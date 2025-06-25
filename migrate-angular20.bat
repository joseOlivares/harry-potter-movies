@echo off
echo Migrando a Angular 20...

if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json

npm install --force

echo Migración completada.
pause