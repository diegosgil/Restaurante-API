# API Restaurante

>Api sobre restaurante paa el proyecto de desarrollo web

```
|
|--src
|----controllers
|----routers
|----services
|----index.js
|--.gitignore
```

1. controllers: Controlar el trafico de informacion
2. routers: Declarar las rutas del API
3. services: Servicios que se van a utilizar 
4. index.js: Inicio del API
5. .gitignore: Ignorar archivos y/o carpetas al repositorio.

## Estructura que retorna los endpoints
```json
{
    "ok":"Boolean",
    "message":"String",
    "info":"Object
}
```


# NOTAS
## Comandos
- `npm init`: Inicializar el proyecto con el package.json
- `npm install NOMBRE`: Instalar las librerias o frameworks
- `npm install`: Instalar TODAS las librerias o frameworks regisradas en el package.json
- `npm run dev`: Ejecutar el scrpt que se encuentra en el package.json                

## Librerías y frameworks
1. Express: `npm install express --save`
2. nodemon: `npm i nodemon` Herramienta de desarrollo para recargar auto el proyecto