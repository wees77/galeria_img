'use stricts'

const imagens = [
    {
        nome: 'sporting',
        url: './img/sporting.webp',
        text: "CR7 começou sua carreira no Sporting CP, onde se destacou desde jovem."
    },
    {
        nome: 'manchester united 2008',
        url: './img/united 2008.webp',
        text: "No Manchester United, CR7 ganhou sua primeira Bola de Ouro e se tornou uma estrela global."

    },
    {
        nome: 'real madrid',
        url: './img/Real Madrid.jpg',
        text: "No Real Madrid, CR7 quebrou inúmeros recordes e conquistou quatro Ligas dos Campeões da UEFA."
    },
    {
        nome: 'juventus',
        url: './img/Juventus.jpg',
        text: "Na Juventus, CR7 continuou a brilhar, ajudando o clube a conquistar títulos nacionais."
    },
    {
        nome: 'portugal',
        url: './img/Portugal.jpg',
        text: "Com a seleção de Portugal, CR7 conquistou a EuroCopa de 2016, Liga das Nações da UEFA em 2019 e 2025."
    },
        {
        nome: 'manchester',
        url: './img/Manchester Utd.webp',
        text: "Em 2021, CR7 retornou ao Manchester United, trazendo sua experiência e liderança para o clube."
    },
    {
        nome: 'al nassr',
        url: './img/Al Nassr.jpg',
        text: "CR7 se juntou ao Al Nassr, continuando sua carreira em um novo desafio em busca dos mil gols."
    },
 
]


function criarImagem(scrImagem) {
    const div = document.createElement('div')
    const galeria = document.getElementById('galeria')
    const img = document.createElement('img')
    const p = document.createElement('p')
    div.appendChild(p)
    p.classList.add("paragrafo")
    div.classList.add("div")
    img.src = scrImagem.url
    p.textContent = scrImagem.text
    galeria.appendChild(div)
    div.appendChild(img)
}

function carregarImagens() {
    const galeria = document.getElementById ('galeria')
    
imagens.forEach(criarImagem)

}

carregarImagens()