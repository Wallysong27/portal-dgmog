import ListaNavbarButtons from "../../../components/listas/ListaNavbarButtons";
import buttons from "../../../components/constants/buttons";

export default function Navbar() {
  return (
    <nav className="fixed w-full h-20 z-50">
      <div className="flex justify-between text-white h-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-3xl lg:py-5 px-6 xl:px-40 py-4 gap-10 2xl:gap-20">
        <ListaNavbarButtons buttons={buttons} />
      </div>
    </nav>
  );
}
