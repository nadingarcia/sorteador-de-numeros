function sortear() {
    let quantidadeDeSorteos = parseInt(document.getElementById('quantidade').value);
    let numeroMenor = parseInt(document.getElementById('de').value);
    let numeroMaior = parseInt(document.getElementById('ate').value);
    
    let numerosSorteados = [];

    for (let i = 0; i < quantidadeDeSorteos; i++) {
        let numeroSorteado = parseInt(Math.floor(Math.random() * (numeroMaior - numeroMenor + 1)+numeroMenor));
        numerosSorteados.push(numeroSorteado);
        console.log(numerosSorteados);
        let texto = numerosSorteados;
        document.getElementById('resultado').innerText = texto;
    }
    document.getElementById('btn-reiniciar').disabled = false;
}

function reiniciar() {
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('resultado').innerText = '';
    document.getElementById('btn-reiniciar').disabled = true;
}