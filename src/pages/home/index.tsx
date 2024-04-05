import Navbar from "../../components/ui/navbar";
import BackgroundHome from "../../assets/img/background.png";
import Logo from "../../assets/img/Logo.png";
import NossosServicos from "../../components/ui/servicos";
import Footer from "../../components/ui/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="relative max-h-screen">
        <img
          src={BackgroundHome}
          className="object-cover filter brightness-50 w-full max-h-screen"
          alt=""
        />
        <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
          <img src={Logo} alt="" className="w-full" />
        </div>
      </div>
      <NossosServicos />
      <Footer />
    </div>
  );
}
