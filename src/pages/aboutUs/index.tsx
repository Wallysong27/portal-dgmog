import Navbar from '../../components/ui/navbar'
import Acreditamos from "../../components/ui/quemSomos/acreditamos";
import Crescimento from "../../components/ui/quemSomos/crescimento/index";
import Equipe from "../../components/ui/quemSomos/equipe/index";

export default function QuemSomos() {
  return (
    <div>
      <Navbar />
      <Crescimento />
      <Acreditamos />
      <Equipe />
    </div>
  );
}
