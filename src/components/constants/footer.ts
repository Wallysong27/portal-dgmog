import Footer from "../model/Footer";
import FooterCieges from "../../assets/img/footerCieges.svg";
import FooterCispe from "../../assets/img/footerCispe.png";
import FooterDgmog from "../../assets/img/footerDgmog.png";
import FooterSes from "../../assets/img/footerSes.png";

const footer: Footer[] = [
  {
    id: 1,
    imagem: FooterCispe,
    descricao: "Logo Footer CISPE",
  },
  {
    id: 2,
    imagem: FooterDgmog,
    descricao: "Logo Footer DGMOG",
  },
  {
    id: 3,
    imagem: FooterCieges,
    descricao: "Logo Footer CIEGES",
  },
  {
    id: 4,
    imagem: FooterSes,
    descricao: "Logo Footer SES",
  },
];

export default footer;
