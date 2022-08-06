const destinos = document.querySelectorAll('[data-destino]');

destinos.forEach( element => {
    element.addEventListener('click', (event) => {
        event.preventDefault()

        let rota = element.dataset.destino
        mostraDestino(rota)
    })
})

function mostraDestino(destino) {
    const titulo = document.querySelector('[data-titulo]')
    const descricao = document.querySelector('[data-descricao]')
    const curiosidade1 = document.querySelector('[data-curiosidade1]')
    const curiosidade2 = document.querySelector('[data-curiosidade2]')
    const imagemDestino = document.querySelector('[data-imagemDestino]')

    if(destino === 'lua'){
        titulo.textContent = 'LUA'
        descricao.textContent = " Veja nosso planeta como você nunca viu antes. Uma viagem relaxante perfeita para ajudar recuperar a perspectiva e voltar revigorado. Enquanto estiver lá, conheça um pouco da história visitando os locais de pouso Luna 2 e Apollo 11."
        curiosidade1.innerHTML = 'Distancia Média: <br> 384.400 KM'
        curiosidade2.innerHTML = 'Tempo de Viagem: <br> 3 dias'
        imagemDestino.src = './assets/destination/image-moon.png'
        imagemDestino.ariaValueText = 'a Lua com toda a sua beleza acinzentada.'
    }
    if(destino === 'marte'){
        titulo.textContent = 'MARTE'
        descricao.textContent = "Não se esqueça de levar suas botas de caminhada. Você precisará deles para enfrentar o Monte Olimpo, a montanha planetária mais alta do nosso sistema solar. São duas vezes e meia do tamanho do Everest!"
        curiosidade1.innerHTML = 'Distancia Média: <br> 255 mil KM'
        curiosidade2.innerHTML = 'Tempo de Viagem: <br> 9 meses'
        imagemDestino.src = './assets/destination/image-mars.png'
        imagemDestino.ariaValueText = 'O planeta vermelho, Marte.'
    }
    if(destino === 'europa'){
        titulo.textContent = 'EUROPA'
        descricao.textContent = "A menor das quatro luas galileanas que orbitam Júpiter, Europa é uma o sonho do amante de inverno. Com uma superfície gelada, é perfeito para um pouco de patinação no gelo, curling, hóquei ou simples relaxamento em seu confortável cabana invernal."
        curiosidade1.innerHTML = 'Distancia Média: <br> 628 mil KM'
        curiosidade2.innerHTML = 'Tempo de Viagem: <br> 3 anos'
        imagemDestino.src = './assets/destination/image-europa.png'
        imagemDestino.ariaValueText = 'Europa, um dos corpos celestes mais belos com suas fendas na superfície.'
    }
    if(destino === 'tita'){
        titulo.textContent = 'TITÃ'
        descricao.textContent = "A única lua conhecida por ter uma atmosfera densa além da Terra, Titã é um lar longe de casa (apenas algumas centenas de graus mais frio!). Como um bônus, você obtém vistas impressionantes dos anéis de Saturno."
        curiosidade1.innerHTML = 'Distancia Média: <br> 1.6 bi KM'
        curiosidade2.innerHTML = 'Tempo de Viagem: <br> 7 anos'
        imagemDestino.src = './assets/destination/image-titan.png'
        imagemDestino.ariaValueText = 'Titã uma real obra de arte.'
    }
}