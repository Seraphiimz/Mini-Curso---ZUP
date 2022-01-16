const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const vom = document.querySelector('#status');

gerarValorAletorio = () => {
    return Math.floor(Math.random() * 4);
}

pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAletorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}` , {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.imagem;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        vom.innerHTML = data.status; 
    });
}

botao.onclick = pegarPersonagem;