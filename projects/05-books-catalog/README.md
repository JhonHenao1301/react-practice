
- [x] Available books visualization: App must show a list of available
books that user can check out.


- [] Reading List Creation: The user must be able to create a reading list from the available books. It should be clear from the UI which books are on the reading list and which are not. It should also be possible to move a book from the reading list to the available list.

- [] Filtering Books by Genre: Users should be able to filter the list of available books by genre, and a counter will be displayed with the number of books available, the number of books on the reading list, and the number of books available in the selected genre.

- [] Sincronización de Estado: Debe haber una sincronización del estado global que refleje el número de libros en la lista de lectura y el número de libros todavía disponibles. Si un libro se mueve de la lista de disponibles a la lista de lectura, el recuento de ambos debe actualizarse en consecuencia.

Persistencia de Datos: La aplicación debe persistir los datos de la lista de lectura en el almacenamiento local del navegador. Al recargar la página, la lista de lectura debe mantenerse.

Sincronización entre pestañas: Si el usuario abre la aplicación en dos pestañas diferentes, los cambios realizados en una pestaña deben reflejarse en la otra. Sin necesidad de usar Backend.

Despliegue: La aplicación debe estar desplegada en algún servicio de hosting gratuito (Netlify, Vercel, Firebase, etc) y debe ser accesible a través de una URL pública. Indica la URL en el README.

Test: La aplicación debe tener AL MENOS un test. Haz el test que consideres más importante para tu aplicación.