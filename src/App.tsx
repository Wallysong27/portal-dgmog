import Home from "./pages/home";
import Footer from "./pages/listas/footer";
// import PaginaFuncionarios from "./pages/listas/funcionarios";
import Navbar from "./pages/listas/navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <PaginaFuncionarios /> */}
      <Footer />
    </div>
  );
}
