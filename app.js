//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo() {
    // Captura o valor do campo de entrada pelo id do input no HTML
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    // Valida se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Limpa o campo de entrada
    input.value = "";

    // Atualiza a lista de amigos na tela
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    // Obtém o elemento da lista
    let lista = document.getElementById('listaAmigos');

    // Limpa a lista existente
    lista.innerHTML = "";
    
    // Percorre o array e adiciona cada amigo como <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // Valida se há amigos no array
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear.");
        return;
    }

    // Gera um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    let nomeSorteado = amigos[indiceSorteado];

    // Mostra o resultado na tela
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> O amigo secreto sorteado foi: ${nomeSorteado}!</li>`;

    // Oculta a lista de amigos
    let lista = document.getElementById('listaAmigos');
    lista.style.display = "none";
}
