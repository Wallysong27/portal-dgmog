import Navbar from "../../model/Navbar";
import DropdownMenuItem from "./DropdownMenuItem";

// import NavbarItem from "./NavbarItem";

interface ListaNavbarProps {
  navbar: Navbar[];
}

export default function ListaNavbar(props: ListaNavbarProps) {
  return (
    <div className="flex py-5 justify-around">
        {/* <img src={} alt="" /> */}
      {props.navbar.map((item) => (
        <DropdownMenuItem key={item.id} navbar={item} subItems={item.subItems} />
      ))}
    </div>
  );
}
