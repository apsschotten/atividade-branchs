function somar() {
    let valorX = document.getElementById('valorX_soma').value * 1;
    let valorY = document.getElementById('valorY_soma').value * 1;
    let resultadoSoma = valorX + valorY;
    document.getElementById('resultado_soma').value = resultadoSoma;
};

function subtrair() {
    let valorX = document.getElementById('valorX_sub').value;
    let valorY = document.getElementById('valorY_sub').value;
    let resultadoSubtração = valorX - valorY;
    document.getElementById('resultado_sub').value = resultadoSubtração;
};