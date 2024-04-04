const botonTema = document.getElementById('boton-tema');
const cuerpo = document.body;

botonTema.addEventListener('click', function () {
    cuerpo.classList.toggle('tema-oscuro');
});
