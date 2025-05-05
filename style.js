const input = document.getElementById("campoTarefa");
const lista = document.getElementById("listaTarefas");
const msgVazia = document.getElementById("mensagemVazia");

function adicionar() {
  const texto = input.value.trim();
  if (!texto) {
    alert("Digite uma tarefa válida!");
    return;
  }

  const item = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = texto;

  const botao = document.createElement("button");
  botao.textContent = "❌";
  botao.onclick = function () {
    lista.removeChild(item);
    atualizarMensagem();
  };

  item.appendChild(span);
  item.appendChild(botao);
  lista.appendChild(item);

  input.value = "";
  input.focus();
  atualizarMensagem();
}

function atualizarMensagem() {
  if (lista.children.length === 0) {
    msgVazia.style.display = "block";
    lista.style.display = "none";
  } else {
    msgVazia.style.display = "none";
    lista.style.display = "block";
  }
}

atualizarMensagem();

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    adicionar();
  }
});