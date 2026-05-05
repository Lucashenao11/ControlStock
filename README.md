# Este es el proyecto para gestión de inventario para tiendas pequeñas - Por Jonatán Noreña y Lucas Henao

# Se hará un paso a paso para la solución del proyecto desde 0

# Paso 1 - Instalación NVM

- Se debe instalar nvm (node version manager) se busca en el navegador y se instala la última versión LTS (Long-Term Support), versión más estable que las nuevas.
- Verificar instalación con 'nvm version'.
- También es importante verificar que node esté instalado, si no, instalarlo desde el navegador y verificar con node -v, y también verificar npm -v.

# Paso 2 - Instalación angular

- Se debe instalar una versión de angular (igualmente, lo ideal es una versión LTS)
- Se instala con 'npm install -g @angular/cli@20.0.0'

# Paso 3 - Se crea el primer directorio con una aplicación básica de angular

- 'ng new stock-tienda' ng es el comando de angular que básicamente le dice que hacer.

# Decisiones a la hora de crear la aplicación básica

- Se rechazó el autocompletado, el compartimiento de datos, la propuesta de 'zoneless' application without zone.js y el renderizado (SSR). Todo esto porque apenas estamos aprendiendo, y la mayoría de estas peticiones son para desarrolladores experimentados, especialmente con Angular.
- Se corre el front con 'ng serve'

# Paso 4 - Subir proyecto a GitHub

- git init
- git status
- git add .
- git commit -m "Mensaje"
- En caso de que ya haya un repositorio, 'git remote remove origin' y poner el nuevo
- git remote add origin https://github.com/TU_USUARIO/ControlStock.git
- Renombrar rama master a main: 'git branch -M main'
- Subir todo: 'git push -u origin main'

# A tener en cuenta en caso de presentarse el error de la carpeta azul con flecha blanca

Convertir las carpetas en directorios normales

- 'git rm --cached stock-tienda': esto elimina esas rutas del "índice" del repo principal
- 'rm -rf stock-tienda/.git': ya git dejará de tratar las carpetas como repositorios anidados