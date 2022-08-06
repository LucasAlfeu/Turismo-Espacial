const equipamentos = document.querySelectorAll('[data-equipamentos]')

equipamentos.forEach( element => {
    element.addEventListener('click', () => {
        let maquinas = element.dataset.equipamentos
    })
})

function mostraEquipamentos(equipamento){
    const titulo = document.querySelector('[data-titulo]')
    const descricao = document.querySelector('[data-descricao]')
    const imagem = document.querySelector('[data-imagem]')

    if(equipamento === 'veiculo-de-lancamento') {
        titulo.textContent = 'VEÍCULO DE LANÇAMENTO'
        descricao.textContent = 'Um veículo lançador ou foguete transportador é um veículo propelido por foguete usado para transportar um carga útil da superfície da Terra para o espaço, geralmente para a órbita da Terra ou além. Nosso foguete transportador WEB-X é o mais poderoso em operação. Com 150 metros de altura, é uma visão bastante inspiradora na plataforma de lançamento!'
        imagem.src = './assets/technology/image-launch-vehicle-portrait.jpg'
        imagem.ariaValueText = 'Foguete em lançamento'
    }
    if(equipamento === 'espacoporto') {
        titulo.textContent = 'ESPAÇOPORTO'
        descricao.textContent = 'Um espaçoporto ou cosmódromo é um local para lançamento (ou recebimento) de naves espaciais, por analogia ao porto marítimo para navios ou aeroporto para aeronaves. Baseado no famoso Cabo Canaveral, nosso espaçoporto está idealmente situado para aproveitar da rotação da Terra para o lançamento.'
        imagem.src = './assets/technology/image-spaceport-portrait.jpg'
        imagem.ariaValueText = 'Estrutura utilizada para o lançamento do foguete'
    }
    if(equipamento === 'capsula') {
        titulo.textContent = 'CAPSULA'
        descricao.textContent = 'Uma cápsula espacial é uma espaçonave frequentemente tripulada que usa uma reentrada de corpo rombudo cápsula para reentrar na atmosfera da Terra sem asas. Nossa cápsula é onde você vai gastar seu tempo durante o vôo. Inclui um ginásio espacial, cinema, e muitas outras atividades para mantê-lo entretido.'
        imagem.src = './assets/technology/image-space-capsule-portrait.jpg'
        imagem.ariaValueText = 'Estrutura para abrigar o astronauna na vasta imensidão do espaço'
    }
}