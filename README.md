<h1 align="center"><>------><------<\\... ChaSamApp .../>------><------<></h1>



## ---------------------------------------------------------------------------- ##
## ---------------------------------------------------------------------------- ##

## Development server

Run `ionic serve` for a dev server. Navigate to `http://localhost:8100/`. The app will automatically reload if you change any of the source files.


# Build App dentro de la carpeta "Platforms"

## _in CMD_ :
> cd platform

## _After_

* > Run Android`ionic capacitor build android` 
* > Run Ios`ionic capacitor build ios`


## ---------------------------------------------------------------------------- ##
## ---------------------------------------------------------------------------- ##

## Generar Resources icon o splash para todos los dispositivos automaticamente:

npm install capacitor-resources -g

## Packcage.json:
~~~
{
  ...
  "scripts": {
    ...
      "resources": "capacitor-resources -p android,ios"
  }
}
~~~
## Comando inicial:

$ capacitor-resources

## Alternativas

* -V, --version               output the version number
* -i, --icon [optional]       optional icon file path
                            (default: ./resources/icon.png)
* -s, --splash [optional]     optional splash file path
                            (default: ./resources/splash.png)
* -p, --platforms [optional]  optional platform token comma separated list
                            available tokens: android, ios, windows, blackberry10
                            (default: all platforms processed)
* -o, --outputdir [optional]  optional output directory
                            (default: ./resources/)
* -I, --makeicon [optional]   option to process icon files only
* -S, --makesplash [optional] option to process splash files only
* -h, --help                  output usage information

## Cada vez que se quiera ejecutar:

npm run resources
