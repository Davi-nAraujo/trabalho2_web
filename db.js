import { Sequelize, DataTypes } from "sequelize";

// conexão com banco SQLite em memória
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:",
  logging: false,
});

const Potion = sequelize.define("Potion", {
  nome: { type: DataTypes.STRING, allowNull: false },
  descricao: { type: DataTypes.TEXT, allowNull: false },
  imagem: { type: DataTypes.STRING, allowNull: false },
  preco: { type: DataTypes.FLOAT, allowNull: false },
});

// poções de exemplo para popular o banco
const pocoesIniciais = [
  {
    nome: "Poção Blue Sky",
    descricao:
      "Essa poção provê um surto de inspiração por 24 horas. Foi utilizada por John Lennon quando escreveu Lucy in the Sky with Diamonds.",
    imagem: "/img/blue-sky.png",
    preco: 300,
  },
  {
    nome: "Poção do Perfume Misterioso",
    descricao:
      "Essa poção faz com que você fique cheirando lilás e groselha por 24 dias. Essência muito admirada pelos bruxos.",
    imagem: "/img/perfume.png",
    preco: 200,
  },
  {
    nome: "Poção de Pinus",
    descricao:
      "Essa poção faz com que você fique 10 cm mais alto! Observação: efeitos colaterais desconhecidos.",
    imagem: "/img/pinus.png",
    preco: 3000,
  },
  {
    nome: "Poção da Beleza Eterna",
    descricao: "Veneno que mata rápido.",
    imagem: "/img/beleza.png",
    preco: 100,
  },
  {
    nome: "Poção do Arco Íro",
    descricao: "Traz felicidade momentânea. Pode durar de 10 minutos a 2 dias.",
    imagem: "/img/arco-iro.png",
    preco: 120,
  },
  {
    nome: "Caldeirão das Verdades Secretas",
    descricao:
      "As pessoas lhe dirão apenas verdades por 1 hora. É necessário beber os 5L.",
    imagem: "/img/verdades.png",
    preco: 150,
  },
];

async function initDb() {
  await sequelize.sync({ force: true });
  await Potion.bulkCreate(pocoesIniciais);
}

export { sequelize, Potion, initDb };
