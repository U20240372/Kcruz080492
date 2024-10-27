// Oscar Iván Murillo Hidalgo.

// Seleccionamos el elemento h1 y los botones por sus IDs
const titulo = document.getElementById('titulo');
const btnCambiarTexto = document.getElementById('btnCambiarTexto');
const btnCambiarColor = document.getElementById('btnCambiarColor');
const btnCambiarAlineacion = document.getElementById('btnCambiarAlineacion');
const btnCrearTexto = document.getElementById('btnCrearTexto');
const btnBorrarTexto = document.getElementById('btnBorrarTexto');

// Función para cambiar el texto del h1
btnCambiarTexto.addEventListener('click', () => {
    titulo.textContent = 'Texto cambiado con JavaScript';
});

// Función para cambiar el color del h1
btnCambiarColor.addEventListener('click', () => {
    const colores = ['red', 'black'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    titulo.style.color = colorAleatorio;
});

// Función para cambiar la alineación del h1
btnCambiarAlineacion.addEventListener('click', () => {
    const alineaciones = ['left', 'center',];
    const alineacionAleatoria = alineaciones[Math.floor(Math.random() * alineaciones.length)];
    titulo.style.textAlign = alineacionAleatoria;
});

// Función para crear un nuevo párrafo debajo del h1
btnCrearTexto.addEventListener('click', () => {
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = 'JavaScript permite crear páginas dinámicas';
    nuevoParrafo.classList.add('parrafoCreado');
    document.body.appendChild(nuevoParrafo);
});

// Función para borrar el contenido debajo del h1
btnBorrarTexto.addEventListener('click', () => {

    const parrafosCreados = document.querySelectorAll('.parrafoCreado');
    parrafosCreados.forEach(parrafo => {
        parrafo.remove();
    });
});
