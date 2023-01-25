

document.addEventListener('click', function() {
    console.log('clicking');
});




document.getElementById('btnperfil').addEventListener('click', function () {
    console.log('boton clieckado');
    let masdatos = document.getElementById('mas_datos');
    masdatos.style.display='block';
});
