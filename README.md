# Poções e Soluções

Projeto da Atividade Prática 2 da disciplina de Introdução ao Desenvolvimento Web.

Site de vendas da loja de poções "Poções e Soluções". O projeto tem um Web Service para
cadastrar, listar e remover poções, uma página de administração para a vendedora e o site
voltado para o comprador, que busca as poções no Web Service usando AJAX.

## Tecnologias

- Node.js e Express
- Sequelize com SQLite em memória
- HTML, CSS e JavaScript

## Como executar

Instale as dependências:

    npm install

Inicie o servidor:

    npm start

Depois acesse no navegador:

- Loja: http://localhost:3000
- Administração: http://localhost:3000/admin.html

O banco de dados é em memória, então as poções de exemplo são recriadas toda vez que o
servidor é iniciado.

## Rotas do Web Service

- `GET /api/potions` - lista todas as poções
- `POST /api/potions` - cadastra uma poção (nome, descricao, imagem, preco)
- `DELETE /api/potions/:id` - remove uma poção
