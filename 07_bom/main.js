'use strict'

const getBOM = () => {
    document.write(`
    <hr>
    <p>El ancho de la pantalla es: ${screen.width}px </p>
    <p>El alto de la pantalla es: ${screen.height}px </p>
    <p>Ubicación del archivo html:  ${window.location}</p>
    `);
}

const redirect = (url) => {
    window.location.href = url;
}

const openWindow = (url) => {
    window.open(url, '','width=400,height=300');
}

getBOM();
redirect('https://www.youtube.com/');
openWindow('https://www.youtube.com/');