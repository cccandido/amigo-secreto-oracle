// Array para guardar os amigos
let listaAmigos = [];

// Pega o input
const input = document.getElementById("amigo");

// Adiciona amigo na lista
function adicionarAmigo() {
  const nome = input.value.trim();
  if (!nome) {
    alert("Digite um nome válido!");
    input.focus();
    return;
  }

  const jaExiste = listaAmigos
    .map(n => n.toLowerCase())
    .includes(nome.toLowerCase());

  if (jaExiste) {
    alert("Esse nome já está na lista.");
    input.focus();
    return;
  }

  listaAmigos.push(nome);
  atualizarLista();
  input.value = "";
  input.focus();
  // limpa resultado anterior, se houver
  document.getElementById("resultado").innerHTML = "";
}

// Visualiza a lista de amigos
function atualizarLista() {
  const ul = document.getElementById("listaAmigos");
  ul.innerHTML = "";

  listaAmigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    ul.appendChild(li);
  });
}

// Sorteia um amigo
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

function reiniciarJogo() {
    listaAmigos = []; // limpa a lista
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    alert("Jogo reiniciado!");
}

