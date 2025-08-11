'use stricts'

const imagens = [
    {
        nome: 'sporting',
        url: './img/sporting.webp'
    },
    {
        nome: 'real madrid',
        url: './img/Real Madrid.jpg'
    },
    {
        nome: 'juventus',
        url: './img/Juventus.jpg'
    },
    {
        nome: 'portugal',
        url: './img/Portugal.jpg'
    },
        {
        nome: 'manchester',
        url: './img/Manchester Utd.webp'
    },
    {
        nome: 'al nassr',
        url: './img/Al Nassr.jpg'
    },
    {
        nome: 'bola de ouro',
        url: './img/bola_ouro.avif'
    },
    {
        nome: 'treino',
        url: './img/treino.webp'
    }
]

function criarImagem(scrImagem) {
    const galeria = document.getElementById('galeria')
    const img = document.createElement('img')
    img.src = scrImagem.url
    galeria.appendChild(img)
}

function carregarImagens() {
    const galeria = document.getElementById ('galeria')



//     let contador = 0
//     const limite = imagens.length -1
//     while (contador <= limite) {
//         const imagem = document.createElement('img')
//         imagem.src = imagens[contador]
//         galeria.appendChild(imagem)
//         contador++
// }
    
imagens.forEach(criarImagem)

}

carregarImagens()