[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/KsHSEX27)
## Examen de Desarrollo Backend con Express

### Instrucciones Generales
- El examen consta de tres partes, cada una correspondiente a una ruta de una API REST desarrollada con Express, todas deben desarrollarse dentro de la misma aplicación.
- Utiliza la versión más reciente de Express para desarrollar la API.
- Utiliza las buenas prácticas de desarrollo que has aprendido en clase.
- La evaluación se realizará en base a la funcionalidad correcta de las rutas, la claridad del código y la organización de tu aplicación.
- Es importante que esta API esté desplegada y funcionando correctamente. Si la API no está desplegada en internet, el examen no será calificado y se otorgará una calificación de 0.

### Rutas
1. **/coin/:coinName**
   - Descripción: Este endpoint debe consumir la API de CoinCap (https://docs.coincap.io/?version=latest) y recibir por parámetro el nombre de una moneda. Si el nombre de la moneda es válido, debe retornar un string con el siguiente formato: "El precio en dólares de la moneda para el día de hoy es X", donde X es el precio de la moneda en dólares según CoinCap. Si el nombre de la moneda no es válido, debe retornar un mensaje diciendo "El nombre de la moneda no fue encontrado en la base de datos".

2. **/users/:count?sort=ASC|DESC**
   - Descripción: Este endpoint debe retornar una lista de usuarios. El parámetro count indica la cantidad de usuarios a devolver y el parámetro sort indica si la lista debe estar organizada de manera ascendente (ASC) o descendente (DESC) según el apellido del usuario. Por defecto, la lista debe estar organizada de manera ascendente. La lista debe contener al menos nombre y apellido de cada usuario.

3. **/users**
   - Descripción: Este endpoint debe simular la creación de un usuario. Debe recibir los siguientes parámetros obligatorios: nombre, apellido, correo electrónico. Además, puede recibir los parámetros opcionales ciudad y país. Si no se proporcionan ciudad ni país, estos deben ser seteados por defecto a "Bogotá" y "Colombia" respectivamente. Una vez "creado" el usuario, el endpoint debe retornar un objeto JSON con la información del usuario creado.

### Evaluación
- Cada ruta será evaluada en base a su funcionalidad y correcta implementación de acuerdo a las especificaciones.
- Se valorará la claridad y organización del código, así como el uso adecuado de buenas prácticas de desarrollo.
- Recuerde que la API en ningún momento debe romperse, así que realice un correcto manejo de errores y excepciones para evitar sucesos desafortunados.

¡Buena suerte!


Lista de nombres de la clase:

| Apellido y Nombre            |
|------------------------------|
| ACERO GARCIA, SAMUEL         |
| ALJURI MARTINEZ, DAREK       |
| CEPEDA URIBE, JUAN FELIPE    |
| CHAVES PEREZ, ANA MARIA      |
| CRUZ PAVAS, CARLOS DAVID     |
| DIAZ ALGARIN, DIEGO NORBERTO |
| DIAZ BERNAL, JORGE ESTEBAN   |
| DIAZ VARGAS, DAVID ESTEBAN   |
| FORERO PEÑA, JUAN JOSE       |
| GUTIERREZ DE PIÑERES BARBOSA, SANTIAGO |
| LOPEZ HUERTAS, SAMUEL ESTEBAN |
| MEDINA FERNANDEZ, MICHAEL STEVEN |
| MORENO CARVAJAL, KATHERIN JULIANA |
| MORENO PATARROYO, JUAN PABLO  |
| MUÑOZ SENDOYA, NICOLAS ESTEBAN |
| NAVARRO CUY, SANTIAGO        |
| PARRADO MORALES, JUAN PABLO  |
| RAMIREZ CHINCHILLA, DANIEL SANTIAGO |
| RESTREPO COCA, JUAN PABLO    |
| REYES GONZALEZ, GABRIELA     |
| RODRIGUEZ FALLA, JUAN JOSE   |
| RUIZ TORRES, VALENTINA       |
| SALAS GUTIERREZ, MARIANA     |
| SANCHEZ SANDOVAL, SEBASTIAN  |
| SARMIENTO GUARNIZO, JOSUE DAVID |
| SOLER PRADO, SANTIAGO        |
| TAMAYO LOPEZ, MARIA FERNANDA |
| URREA LARA, DEIVID NICOLAS   |
| AZCONA, ANDRÉS                |
