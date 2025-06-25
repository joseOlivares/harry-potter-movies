# Actualización a Angular 20

Este documento describe los cambios realizados para actualizar el proyecto de Angular 17 a Angular 20.

## Cambios realizados

1. **Actualización de dependencias en package.json**:
   - Actualización de los paquetes core de Angular de ^17.2.0 a ^20.0.0
   - Actualización de las herramientas de desarrollo de Angular
   - Ajuste de la versión de TypeScript a ~5.4.2
   - Actualización de tslib a ^2.6.2
   - Mantenimiento de la versión de rxjs en ~7.8.1
   - Ajuste de zone.js a ~0.14.4

2. **Script de migración**:
   - Se ha creado un script `migrate-to-angular20.bat` para facilitar el proceso de migración
   - El script limpia node_modules, package-lock.json y la caché de npm
   - Instala las nuevas dependencias con la opción --legacy-peer-deps para resolver conflictos

## Cómo completar la migración

1. Ejecuta el script de migración:
   ```
   .\migrate-to-angular20.bat
   ```

2. Verifica que la aplicación funcione correctamente:
   ```
   npm start
   ```

3. Soluciona cualquier problema de compatibilidad que pueda surgir durante la ejecución.

## Novedades en Angular 20

Angular 20 incluye varias mejoras y nuevas características:

- Mejoras en el rendimiento y la velocidad de compilación
- Soporte mejorado para TypeScript 5.4
- Mejoras en el sistema de señales (Signals)
- Mejoras en el sistema de inyección de dependencias
- Nuevas APIs para el manejo de formularios
- Mejoras en el router y la navegación
- Mejor soporte para Server-Side Rendering (SSR)

## Posibles problemas y soluciones

Si encuentras problemas durante la migración, considera lo siguiente:

1. **Problemas de compatibilidad con TypeScript**:
   - Asegúrate de usar TypeScript 5.4.x que es compatible con Angular 20

2. **Problemas con dependencias de terceros**:
   - Verifica que las bibliotecas de terceros sean compatibles con Angular 20
   - Considera usar la opción `--legacy-peer-deps` si hay conflictos

3. **Cambios en la API de Angular**:
   - Consulta la documentación oficial de Angular para conocer los cambios en la API
   - Revisa la guía de actualización en angular.io