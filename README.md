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