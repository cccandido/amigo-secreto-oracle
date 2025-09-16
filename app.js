// Array para guardar os amigos
let listaAmigos = [];

// Adiciona amigo na lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    listaAmigos.push(nome);
    atualizarLista();

    input.value = ""; // limpa campo
    input.focus();
}

// Atualiza visualização da lista
function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    listaAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

// Sorteia um amigo da lista
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    const indice = Math.floor(Math.random() * listaAmigos.length);
    const sorteado = listaAmigos[indice];

    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = `<li>Amigo sorteado: ${sorteado}</li>`;
}
