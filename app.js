function gerarNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function sortear() {
    let quantidadeDeSorteos = parseInt(document.getElementById('quantidade').value);
    let numeroMenor = parseInt(document.getElementById('de').value);
    let numeroMaior = parseInt(document.getElementById('ate').value);

    let resultados = [];

    for (let i = 0; i < quantidadeDeSorteos; i++) {
        let numeroSorteado = gerarNumero(numeroMenor, numeroMaior);

        while (resultados.includes(numeroSorteado)) {
            numeroSorteado = gerarNumero(numeroMenor, numeroMaior);
        }
        resultados.push(numeroSorteado);
    }

    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';

    resultados.forEach((numero, index) => {
        let numeroElement = document.createElement('span');
        numeroElement.classList.add('numero-animado');
        numeroElement.innerText = numero;

        if (index !== resultados.length - 1) {
            numeroElement.innerHTML += '&nbsp;';
        }

        resultadoElement.appendChild(numeroElement);
    });

    document.getElementById('btn-reiniciar').disabled = false;
}

function reiniciar() {
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('resultado').innerText = '';
    document.getElementById('btn-reiniciar').disabled = true;
}
