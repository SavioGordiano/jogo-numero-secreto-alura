const menorValor = 1;
const maiorValor = 100;

const maiorElemento = document.getElementById('maior-valor');
maiorElemento.textContent = maiorValor;

const menorElemento = document.getElementById('menor-valor');
menorElemento.textContent = menorValor;

numeroSecreto = gerarNumeroAleatorio();
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
} 