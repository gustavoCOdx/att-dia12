// Todas as variaveis declaradas aqui em cima - fora das funçôes - são consideradas GLOBAIS e funcionam dentro de qualquer outra função!
let res = document.querySelector('section#result')
let computador = 0
let jogador = 0 

function sortear () {
    let min = 1 // As variaveis declaradas aqui dentro são LOCAIS, e só funcionam dentro da função onde foram declaradas
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio)
}

function jogar() {
    jogador = Number(window.prompt('Qual é o seu palpite?'))
    if (jogador < computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu numero é <strong>MAIOR</strong>!</p>`
    } else if (jogador > computador) {
        res.innerHTML +=`<p> Você falou ${jogador}. Meu numero é <strong>MENOR</strong>`
    } else if (jogador == computador) {
        res.innerHTML += `<p><strong> PARABÉNS!</strong> Você acertou! Eu tinha sorteado esse valor ${computador}!</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }
}