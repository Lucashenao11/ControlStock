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

# Actualizar la rama main desde cualquier rama

- 'git checkout main': te lleva a la rama main desde cualquier rama
- 'git merge <nombre-rama>': Trae los cambios de la rama anterior y los combína con la rama en la que estoy actualmente
- 'git push origin main': Sube la rama main al repositorio remoto llamado origin

# Creación login.ts

- Se crean variables (user y password) para conectarlas con los inputs del html (se le llama a este proceso two-way-binding) y se hace con [(ngModel)]. Cuando el usuario escribe en el input la variable se actualiza sola. Para usar ngModel, hay que realizar la importación de FormsModule en el .ts (agregarlo tanto en el array de imports como importarlo desde @angular/forms)

- En el .ts vivirán las variables
- HTML muestra las variables o las recibe -> {{ }}, [(ngModel)] (para el ingreso de credenciales) y *ngIf (mostrar una variable si se cumple una condición)

# Creación login.html

- div es una simple caja contenedora, no se ve, solo se usa para agrupar cosas. Se le da estilos con css, se usa para organizar
- label es el texto que describirá un campo
- input es el campo en el que el usuario escribe (type = "text", type = "password")
- button es literalmente el botón clickeable

# Creación interfaz de usuario (para evitar uso de any)

- mkdir models && touch models/user.interface.ts (esto crea directamente el archivo de la interfaz dentro de una carpeta models, hacerlo desde la terminal estando en src/app)

# Creación servicios

- ng generate service services/auth
El anterior comando crea dos archivos:
- auth.spec.ts: sirve para pruebas automatizadas, en este momento se puede ignorar
- auth.ts: el decorador @Injectable({ providedIn: 'root' }) significa que angular crea una sola instancia de este servicio para toda la aplicación, todos los componentes que lo usen comparten el mismo
- La idea primaria de este servicio será manejar los usuarios. Por ahora, sin backend, va a simular una lista de usuarios en memoria

# Implementación del servicio Auth en register.ts

- Auth es un servicio, no un componente o un módulo, no va en el array imports del decorador. Ese array solo es para cosas visuales como FormsModule, NgIf, RouterLink, etc.

# Creación componente dashboard (al hacer login, se redigirá allá)

- ng generate component dashboard
- Registrar la ruta al dashboard en app.routes.ts