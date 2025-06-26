# Despliegue usando un archivo yaml

## Prerequisitos

Tener instalada la consola de OpenShift oc

## Proceso

1. Desde la consola ejevutar:

   ```
   oc login --web
   ```

2. Iniciar sesión con el usuario de OpenShift
  
3. Cambiarse al proyecto. Ejemplo:

   ```
   oc project joseluiss-503-dev
   ```

4. Aplicar el archivo de configuración yaml. Ejemplo:

   ```
   oc apply -f angular-openshift.yaml
   ```

5. Esperar unos momentos y verificar con el siguiente comando:

    ```
        oc get ksvc angular-openshift 
    ```

6. Resultado:

   ```
    NAME                URL                                                   LATESTCREATED            LATESTREADY               READY  REASON
    angular-openshift   https://angular-openshift-joseluiss-503-dev.apps....  angular-openshift-00002  angular-openshift-00002   True
   ```

7. Abrir la url en el navegador.

## Para actualizar nuevas versiones subidas a Docker Hub con el mismo tag (latest)

  ```
    oc apply -f angular-openshift.yaml
  ```
