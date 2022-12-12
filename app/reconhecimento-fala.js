const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'Pt-Br';

function comecarjogo(){
    recognition.start()
}

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    resultfalar = e.results[0][0].transcript;
    exibirNaTela(resultfalar);
    validarNumero(resultfalar);

}

function exibirNaTela(resultfalar){
    elementoChute.innerHTML = `
    <div> Você disse:</div>
    <span class="box">${resultfalar}</span>
    `
}
recognition.addEventListener('end', () => {
    recognition.start()
})