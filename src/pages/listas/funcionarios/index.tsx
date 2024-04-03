import ListaFuncionarios from "../../../components/listas/ListaFuncionarios";
import funcionarios from "../../../components/constants/funcionarios";

export default function PaginaFuncionarios() {

    return (
        <div>
            <ListaFuncionarios funcionarios={funcionarios} />
        </div>
    )
}