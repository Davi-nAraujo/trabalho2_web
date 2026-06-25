const lista = document.getElementById("lista-pocoes");

async function carregarPocoes() {
  const resposta = await fetch("/api/potions");
  const pocoes = await resposta.json();

  lista.innerHTML = "";
  pocoes.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.imagem}" alt="${p.nome}">
      <h3>${p.nome}</h3>
      <p>${p.descricao}</p>
      <span class="preco">${p.preco} moedas</span>
      <button>Comprar</button>
    `;
    lista.appendChild(card);
  });
}

carregarPocoes();
