function multiplicar() {
    let valorX = document.getElementById('valorX_mult').value;
    let valorY = document.getElementById('valorY_mult').value;
    let resultadoMultiplicação = valorX * valorY;
    document.getElementById('resultado_mult').value = resultadoMultiplicação;
};