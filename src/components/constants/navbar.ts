import Navbar from "../model/Navbar";

const navbar: Navbar[] = [
  {
    id: 1,
    nome: "Home",
  },
  {
    id: 2,
    nome: "Mapas",
  },
  {
    id: 3,
    nome: "Unidades/Especialidades",
  },
  {
    id: 4,
    nome: "Painéis",
  },
  {
    id: 5,
    nome: "Quem Somos",
    subItems: [
      {
        id: 6,
        nome: "SubItem 1",
      },
      {
        id: 7,
        nome: "SubItem 2",
      },
    ],
  },
  {
    id: 8,
    nome: "Equipe",
  },
];

export default navbar;
