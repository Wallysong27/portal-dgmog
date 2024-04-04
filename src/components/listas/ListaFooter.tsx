import Footer from "../model/Footer";
import FooterItem from "./FooterItem";
import { IoIosArrowUp } from "react-icons/io";

interface ListaFooterProps {
  footer: Footer[];
}

export default function ListaFooter(props: ListaFooterProps) {
  return (
    <div className="px-60 my-20">
        <div className="flex flex-col items-center justify-center">
            <IoIosArrowUp />
            <h1>Voltar ao topo</h1>
        </div>
        <div className="border-y mt-6">
            <ul className="py-5 leading-10">
                <li>Home</li>
                <li>Mapas</li>
                <li>Unidades/Especialidades</li>
                <li>Quem Somos</li>
                <li>Equipe</li>
                <li>Sala de Situação</li>
            </ul>
        </div>
      <div className="flex items-center justify-center">
        {props.footer.map((item) => {
          return <FooterItem key={item.id} footer={item} />;
        })}
      </div>
    </div>
  );
}
