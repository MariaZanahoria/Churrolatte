Burger Queen
1. Preámbulo
React, Angular y Vue son algunos de los frameworks y librerías de JavaScript más utilizados por lxs desarrolladorxs alrededor del mundo, y hay una razón para eso. En el contexto del navegador, mantener la interfaz sincronizada con el estado es difícil. Al elegir un framework o librería para nuestra interfaz, nos apoyamos en una serie de convenciones e implementaciones probadas y documentadas para resolver un problema común a toda interfaz web. Esto nos permite concentrarnos mejor (dedicar más tiempo) en las caractrísticas específicas de nuestra aplicación.

Cuando elegimos una de estas tecnologías no solo importamos un pedacito de código para reusarlo (lo cuál es un gran valor per se), si no que adoptamos una arquitectura, una serie de principios de diseño, un paradigma, unas abstracciones, un vocabulario, una comunidad, etc...

Como desarrolladora Front-end, estos kits de desarrollo pueden resultarte de gran ayuda para implementar rápidamente características de los proyectos en los que trabajes.

2. Resumen del proyecto
Esta vez tenemos un proyecto 100% por encargo. Si bien siempre puedes (y debes) hacer sugerencias de mejoras y/o cambios, muchas veces trabajarás en proyectos en los que primero hay que asegurarse de cumplir con lo requerido.

Un pequeño restaurante de hamburguesas, que está creciendo, necesita una interfaz en la que puedan tomar pedidos usando una tablet, y enviarlos a la cocina para que se preparen ordenada y eficientemente (a través de un backend del que nos darán detalles más adelante).

burger-queen

Esta es la información que tenemos del cliente:

Somos Burguer Queen, una cadena de comida 24hrs.

Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y, para seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de nuestros clientes.

Tenemos 2 menús: uno muy sencillo para el desayuno:

Ítem	Precio $
Café americano	5
Café con leche	7
Sandwich de jamón y queso	10
Jugo de frutas natural	7
Y otro menú para el resto del día:

Ítem	Precio
Hamburguesas	$
Hamburguesa simple	10
Hamburguesa doble	15
Acompañamientos	$
Papas fritas	5
Aros de cebolla	5
Para tomar	$
Agua 500ml	5
Agua 750ml	7
Bebida/gaseosa 500ml	7
Bebida/gaseosa 750ml	10
Importante: Los clientes pueden escoger entre hamburguesas de res, de pollo, o vegetariana. Además, por $ 1 adicional, pueden agregarle queso o huevo.

Nuestros clientes son bastante indecisos, por lo que es muy común que cambien el su pedido varias veces antes de finalizarlo.

La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno con todos sus productos. El usuario debe poder ir eligiendo qué productos agregar y la interfaz debe ir mostrando el resumen del pedido con el costo total.

out

3. Objetivos de aprendizaje
El objetivo principal de este proyecto es aprender a construir una interfaz web usando el framework elegido (En este caso vamos a preferir usar React). Este Framework resuelve el problema de: cómo mantener la interfaz y el estado sincronizados. Así que esta experiencia espera familiarizarte con el concepto de estado de pantalla, y cómo cada cambio sobre el estado se va a ir reflejando en la interfaz (por ejemplo, cada vez que agregamos un producto a un pedido, la interfaz debe actualizar la lista del pedido y el total).

La interfaz debe estar diseñada específicamente para correr en tablets.

4. Consideraciones generales
Trabaja en una historia hasta terminarla antes de pasar a la siguiente. Trabaja hasta la historia que puedas en el tiempo especificado.

La aplicación debe ser un Single Page App. Los pedidos los tomaremos desde una tablet, pero no queremos una app nativa, sino una web app que sea responsive y pueda funcionar offline.

Necesitamos pensar bien en el aspecto UX de quienes van a tomar los pedidos, el tamaño y aspecto de los botones, la visibilidad del estado actual del pedido, etc.

La aplicación debe hacer uso de npm-scripts y contar con scripts start, test, build y deploy, que se encarguen de arrancar, correr las pruebas, empaquetar y desplegar la aplicación respectivamente.

Los tests unitarios deben indicar el porcentaje de coverage, al final se debe poder explicar el porcentaje logrado y porqué.

Para comenzar este proyecto tendrás que hacer un fork y clonar este repositorio.

5. Conexión con el Back-end
Tu equipo está conformado por 2 desarrolladoras Front-end y 2 desarrolladoras Back-end, cada pareja contará con su propio repositorio.

El equipo de Front-end va a consumir los endpoints que el equipo de Back-end expondrá, tanto para crear, actualizar, obtener y eliminar data. Reúnanse en equipo y decidan cuales serán estos endpoints y cómo los usarán.

Este proyecto no manejará Autenticación de usuarios pero la comunicación entre el Front-end y el Back-end será protegida a través de un Token que en el equipo van a definir en forma. Este Token validará que la información que llega al Back-end es la correspondiente a la de su Front-end. Esta estrategia hace que la aplicación sea más segura de usar.

El Token al ser una variable que solo debe ser conocida por lxs usuarixs no puede escribirse en texto plano, tendremos que investigar sobre Variables de Entorno para poder protegerlos.

Es muy importante mantener activa la comunicación entre las parejas Front-end y Back-end, esto ayudará a prevenir inconsistencias al momento de mostrar los 2 proyectos funcionando.

6. Pistas, tips y lecturas complementarias
Primeros pasos
Al usar create-react-app en el directorio del proyecto recibirás un error diciendo que hay archivos que podrían presentar un conflicto. Para evitar este problema puedes crear una nueva app usando create-react-app y de ahí mezclarla con la carpeta del proyecto:

# si estabase en la carpeta del proyecto, salimos a la carpeta de más arriba
cd ..

create-react-app burger-queen-tmp
cp -r burger-queen/* burger-queen-tmp/
cp -r burger-queen-tmp/.gitignore burger-queen-tmp/* burger-queen/
rm -rf burger-queen-tmp
cd burger-queen
Otros recursos
Frameworks / libraries
React
Herramientas
npm-scripts
Babel
webpack