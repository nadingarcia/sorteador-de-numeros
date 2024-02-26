let resultados = [];

function gerarNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function speakNumber(number) {
  const speechSynthesis = window.speechSynthesis;

  // Verificar se a API de síntese de fala é suportada pelo navegador
  if ('speechSynthesis' in window) {
    // Criar um objeto de síntese de fala
    const utterance = new SpeechSynthesisUtterance();

    // Definir o texto a ser falado como o número sorteado
    utterance.text = number.toString();

    // Definir o idioma como português do Brasil
    utterance.lang = 'pt-BR';

    // Falar o número
    speechSynthesis.speak(utterance);
  }
}

function sortear() {
    let quantidadeDeSorteos = parseInt(document.getElementById('quantidade').value);
    let numeroMenor = parseInt(document.getElementById('de').value);
    let numeroMaior = parseInt(document.getElementById('ate').value);

    if (quantidadeDeSorteos > (numeroMaior - numeroMenor + 1)){
        alert('O intervalo entre os números é menor que a quantidade de sorteios. Por favor, insira um intervalo maior ou uma quantidade de sorteios menor.');
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        document.getElementById('quantidade').value = '';
    } else {
        for (let i = 0; i < quantidadeDeSorteos; i++) {
            let numeroSorteado = gerarNumero(numeroMenor, numeroMaior);

            while (resultados.includes(numeroSorteado)) {
                numeroSorteado = gerarNumero(numeroMenor, numeroMaior);
            }
            resultados.push(numeroSorteado);

            speakNumber(numeroSorteado); // Chamar a função speakNumber() para falar o número sorteado
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
}

function reiniciar() {
    resultados = [];
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('numero-sorteado').innerText = 'BINGO'; 
    document.getElementById('quantidade').value = '';
    document.getElementById('resultado').innerText = '';
    document.getElementById('btn-reiniciar').disabled = true;
}
