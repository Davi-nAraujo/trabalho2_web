const form = document.getElementById("form-pocao");
const tabela = document.getElementById("tabela-pocoes");

async function carregarPocoes() {
  const resposta = await fetch("/api/potions");
  const pocoes = await resposta.json();

  tabela.innerHTML = "";
  pocoes.forEach((p) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td><img src="${p.imagem}" alt="${p.nome}"></td>
      <td>${p.nome}</td>
      <td>${p.descricao}</td>
      <td>${p.preco} moedas</td>
      <td><button class="remover">Remover</button></td>
    `;
    linha.querySelector(".remover").addEventListener("click", () => removerPocao(p.id));
    tabela.appendChild(linha);
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const novaPocao = {
    nome: form.nome.value,
    descricao: form.descricao.value,
    imagem: form.imagem.value,
    preco: form.preco.value,
  };

  await fetch("/api/potions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(novaPocao),
  });

  form.reset();
  carregarPocoes();
});

async function removerPocao(id) {
  await fetch("/api/potions/" + id, { method: "DELETE" });
  carregarPocoes();
}

carregarPocoes();
