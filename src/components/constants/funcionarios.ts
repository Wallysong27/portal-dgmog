import MarianaImg from "../../assets/img/equipe/mariana.png";
import DenysImg from "../../assets/img/equipe/denys.png";
import TiagoImg from "../../assets/img/equipe/tiago.png";
import WallysonImg from "../../assets/img/equipe/wallyson.png";
import JoaoImg from "../../assets/img/equipe/joao.png";

import Funcionario from "../model/Funcionario";

const funcionarios: Funcionario[] = [
  {
    id: 1,
    imagem: MarianaImg,
    linkedin: "https://www.linkedin.com/in/mariana-silva-7722031b8/",
    cargo: "Gerente de Projetos de Tecnologia",
    nome: "Mariana Silva",
    formacoes: [
      "Pós-Graduada em Segurança da Informação - Faculdade IBRATEC",
      "Graduada em Redes de Computadores - Faculdade IBRATEC",
      "Técnica em Redes de Computadores - UNIBRATEC",
      "Academia Linux - FUCTURA",
      "Técnica em Desenvolvimento de Sistemas - ETEPAM",
      "Academia Rafa OutSystems - DIGITAL ALCHIMIA",
      "Power BI Intermediário - IMPACTA",
      "Microsoft Power BI para Business Intelligence e Data Science - DSA (Data Science Academy)",
      "Planejamento Estratégico Situacional em Saúde - Faculdade de Educação em Ciências da Saúde",
      "Liderança Estratégica - Escola de Gestão do Paraná",
    ],
  },
  {
    id: 2,
    imagem: DenysImg,
    linkedin: "https://www.linkedin.com/in/denys-marques-60850b67/",
    cargo: "Assessor Técnico",
    nome: "Denys Marques",
    formacoes: [
      "MBA em Business Process Managment - FACULESTE",
      "Pós-Graduando em Big Data - FACULESTE",
      "Pós-Graduando em Gestão de Projetos - FACULESTE",
      "MBA em Gestão Estratégica de Pessoas - UNIMAIS",
      "Graduado em Administração - UFRPE",
      "Graduado em Publicidade e Propaganda - UNIAESO",
      "Graduando em Administração Pública - UFRPE",
      "Graduando em Análise e Desenvolvimento de Sistemas - UNIFBV",
      "Desenvolvimento de Software - ADM&TEC",
      "Técnico em Design Gráfico - ETEPAM",
      "Técnico em Segurança do Trabalho - ETEPAM",
      "Análise de Dados, Dashboards e Power BI - ENAP",
      "Scrum Fundamentals - SCRUMSTUDY",
    ],
  },
  {
    id: 3,
    imagem: TiagoImg,
    linkedin: "https://www.linkedin.com/in/tiago-bezerra-280045187/",
    cargo: "Desenvolvedor Sênior",
    nome: "Tiago Bezerra",
    formacoes: ["Graduado em Engenharia da Computação - UPE"],
  },
  {
    id: 4,
    imagem: WallysonImg,
    linkedin: "https://www.linkedin.com/in/wallyson-gabriel-66947b1b7/",
    cargo: "Assessor Técnico",
    nome: "Wallyson Araújo",
    formacoes: [
      "Graduando em Ciência da Computação - UNIFBV",
      "Gestão Ágil com Scrum - UDEMY",
    ],
  },
  {
    id: 5,
    imagem: JoaoImg,
    linkedin: "https://www.linkedin.com/in/jo%C3%A3o-varella-0ba046284/",
    cargo: "Assessor Administrativo",
    nome: "João Varella",
    formacoes: [
      "Pós-Graduando em Ciência de Dados e Big Data Analytics - Faculdade Metropolitana",
      "Graduado em Administração - UNINASSAU",
    ],
  },
];

export default funcionarios;
