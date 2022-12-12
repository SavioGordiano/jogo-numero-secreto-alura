//botao de recarregar pagina
function recarregarPG(){
    const botao = document.getElementById('botao2')
    botao.addEventListener('click', () => {
        document.location.reload(true);
    })
    
}
//botao de comecar jogo
const botaoComeçar = document.getElementById('botao1')
botaoComeçar.addEventListener('click',() => {
    botaoComeçar.classList.add("botao--desativado")
    comecarjogo()
})