import Funcionario from "../../model/Funcionario";
import FuncionarioPessoa from "./FuncionarioPessoa";

interface ListaFuncionariosProps {
  funcionarios: Funcionario[];
}

export default function ListaFuncionarios(props: ListaFuncionariosProps) {
  return (
    <div className="flex items-start justify-around h-screen p-20">
      {props.funcionarios.map((funcionario) => {
        return (
          <FuncionarioPessoa key={funcionario.id} funcionario={funcionario} />
        );
      })}
    </div>
  );
}
