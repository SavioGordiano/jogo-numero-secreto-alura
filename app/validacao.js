function validarNumero(resultfalar){
    const numero = +resultfalar;
    if (NumberValido(numero)){
        elementoChute.innerHTML += '<div>Valor invalido: Não é um número!</div>'
        return
    }
    if (NumberMaiorMenor(numero)){
        elementoChute.innerHTML += `Valor invalido: O numero precisa está entre ${menorValor} e ${maiorValor}`;
        return
    }
    if (numero == numeroSecreto){
        document.body.innerHTML = `
        <h2>Você Ganhou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button class="botao" id="botao2" >Jogar Novamente</button>
        `
        recarregarPG()
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    } else if (numero < numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
}
function NumberValido(numero){
    return Number.isNaN(numero);
}
function NumberMaiorMenor(numero){
    return numero > maiorValor || numero < menorValor; 
}