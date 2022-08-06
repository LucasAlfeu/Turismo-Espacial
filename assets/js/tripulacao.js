const tripulacao = document.querySelectorAll('[data-tripulante')

tripulacao.forEach( (element) => {
    element.addEventListener('click', () => {
        let perito = element.dataset.tripulante
        mostraTripulante(perito)
    })
})

function mostraTripulante(tripulante){
    const titulo = document.querySelector('[data-funcao]')
    const nome = document.querySelector('[data-nome]')
    const descricao = document.querySelector('[data-descricao]')
    const imagem = document.querySelector('[data-imagem]')

    if(tripulante === 'comandante') {
        titulo.textContent = 'COMANDANTE'
        nome.textContent = 'Douglas Hurley'
        descricao.textContent = 'Douglas Gerald Hurley é um engenheiro americano, ex-piloto do Corpo de Fuzileiros Navais e ex-astronauta da NASA. Ele foi lançado ao espaço pela terceira vez como comandante da Crew Dragon Demo-2.'
        imagem.src = './assets/crew/image-douglas-hurley.png'
        imagem.ariaValueText = 'Senhor de idade com um macacão espacial azul da Nasa vibrando'
    }
    if(tripulante === 'engenheiro') {
        titulo.textContent = 'ENGENEHIRA'
        nome.textContent = 'Anousheh Ansari'
        descricao.textContent = 'Anousheh Ansari é um engenheira iraniana-americana e cofundadora da Prodea Systems. Ansari foi a quarta turista espacial autofinanciada, a primeira mulher autofinanciada a voar para a ISS, e a primeira iraniana no espaço.'
        imagem.src = './assets/crew/image-anousheh-ansari.png'
        imagem.ariaValueText = 'Moça loira com cabelos loiros, usando uma blusa preta de manga comprida e segurando um microfone'
    }
    if(tripulante === 'piloto') {
        titulo.textContent = 'PILOTO'
        nome.textContent = 'Victor Glover'
        descricao.textContent = 'Piloto no primeiro voo operacional do SpaceX Crew Dragon para o Estação Espacial Internacional. Glover é um comandante da Marinha dos EUA, onde pilota um F/A-18. Foi tripulante da Expedição 64 e serviu como engenheiro de vôo de sistemas de estação.'
        imagem.src = './assets/crew/image-victor-glover.png'
        imagem.ariaValueText = 'Homem careca vestindo um macacão azul da nasa sorrindo'
    }
    if(tripulante === 'especialista') {
        titulo.textContent = 'ESPECIALISTA'
        nome.textContent = 'Mark Shuttleworth'
        descricao.textContent = 'Mark Richard Shuttleworth é o fundador e CEO da Canonical, a empresa por trás o sistema operacional Ubuntu baseado em Linux. Shuttleworth tornou-se o primeiro sul Africano para viajar ao espaço como turista espacial.'
        imagem.src = './assets/crew/image-mark-shuttleworth.png'
        imagem.ariaValueText = 'homem com uma bluza escura segurando um microfone palestrando'
    }
}