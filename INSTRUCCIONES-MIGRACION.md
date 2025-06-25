# Instrucciones para migrar a Angular 20

Debido a los conflictos de dependencias, aquí hay varias opciones para completar la migración:

## Opción 1: Usar --force

```bash
# Eliminar node_modules y package-lock.json
rmdir /s /q node_modules
del package-lock.json

# Instalar con --force
npm install --force
```

## Opción 2: Usar package.json alternativo

```bash
# Hacer copia de seguridad del package.json actual
copy package.json package.json.original

# Usar el package.json alternativo
copy package.json.alt package.json

# Instalar dependencias
rmdir /s /q node_modules
del package-lock.json
npm install
```

## Opción 3: Migración gradual

Si las opciones anteriores no funcionan, considera una migración gradual:

1. Restaura el package.json original:
   ```bash
   copy package.json.bak package.json
   ```

2. Actualiza primero a Angular 18:
   ```bash
   ng update @angular/core@18 @angular/cli@18
   ```

3. Luego actualiza a Angular 19:
   ```bash
   ng update @angular/core@19 @angular/cli@19
   ```

4. Finalmente actualiza a Angular 20:
   ```bash
   ng update @angular/core@20 @angular/cli@20
   ```

## Solución de problemas

Si sigues teniendo problemas, prueba estas soluciones:

1. Instala TypeScript 5.8.3 específicamente:
   ```bash
   npm install typescript@5.8.3 --save-dev
   ```

2. Usa la opción --legacy-peer-deps:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Limpia la caché de npm:
   ```bash
   npm cache clean --force
   ```