# Migración a Angular 20

Este proyecto ha sido actualizado para utilizar Angular 20. Sigue estas instrucciones para completar la migración.

## Pasos para completar la migración

1. **Ejecuta el script de migración**:

   ```bash
   .\migrate-to-angular20.bat
   ```

   Este script realizará las siguientes acciones:
   - Eliminar node_modules y package-lock.json
   - Limpiar la caché de npm
   - Instalar las nuevas dependencias con --legacy-peer-deps
   - Verificar la instalación

2. **Verifica la aplicación**:

   ```bash
   npm start
   ```

   Asegúrate de que la aplicación se inicie correctamente y funcione como se espera.

3. **Soluciona problemas (si los hay)**:

   Si encuentras algún problema durante la migración, consulta el archivo `UPGRADE-ANGULAR20.md` para obtener información sobre posibles soluciones.

## Cambios realizados

- Actualización de todas las dependencias de Angular de la versión 17 a la versión 20
- Actualización de TypeScript a la versión 5.4.2
- Ajustes en la configuración para asegurar compatibilidad

## Notas adicionales

- Si encuentras problemas con las dependencias, puedes intentar ejecutar `npm install --force` o `npm install --legacy-peer-deps`
- Para más información sobre los cambios en Angular 20, consulta la [documentación oficial de Angular](https://angular.io/guide/update-to-latest-version)

¡Disfruta de las nuevas características y mejoras de rendimiento de Angular 20!