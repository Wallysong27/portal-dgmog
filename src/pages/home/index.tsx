import BackgroundHome from "../../assets/img/background.png";
import Logo from "../../assets/img/Logo.png";

export default function Home() {
  return (
    <div className="relative -top-20 h-screen">
      <img
        src={BackgroundHome}
        className="object-cover filter brightness-50"
        alt=""
      />
      <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-20%]">
        <img src={Logo} alt="" className="w-full" />
      </div>
    </div>
  );
}
