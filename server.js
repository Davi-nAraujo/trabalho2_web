import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { initDb, Potion } from "./db.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// lista todas as poções
app.get("/api/potions", async (req, res) => {
  const pocoes = await Potion.findAll();
  res.json(pocoes);
});

// cadastra uma poção
app.post("/api/potions", async (req, res) => {
  const { nome, descricao, imagem, preco } = req.body;
  if (!nome || !descricao || !imagem || !preco) {
    return res.status(400).json({ erro: "Preencha todos os campos." });
  }
  const pocao = await Potion.create({ nome, descricao, imagem, preco });
  res.status(201).json(pocao);
});

// remove uma poção
app.delete("/api/potions/:id", async (req, res) => {
  await Potion.destroy({ where: { id: req.params.id } });
  res.status(204).send();
});

initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});
