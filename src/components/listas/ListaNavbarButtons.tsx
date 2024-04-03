import Logo from '../../assets/img/Logo2.png'
import Button from "../model/Button";
import NavbarButton from "./NavbarButton";

interface ListaNavbarButtonsProps {
  buttons: Button[];
}

export default function ListaNavbarButtons(props: ListaNavbarButtonsProps) {
  return (
    <div className="flex items-center justify-between w-full cursor-pointer">
      <img src={Logo} alt="" />
      {props.buttons.map((button) => {
        return <NavbarButton button={button} />;
      })}
    </div>
  );
}
