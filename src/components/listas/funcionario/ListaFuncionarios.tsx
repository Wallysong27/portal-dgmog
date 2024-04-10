import Funcionario from "../../model/Funcionario";
import FuncionarioPessoa from "./FuncionarioPessoa";

interface ListaFuncionariosProps {
  funcionarios: Funcionario[];
}

export default function ListaFuncionarios(props: ListaFuncionariosProps) {
  return (
    <div className="flex items-start justify-around p-20 gap-10">
      {props.funcionarios.map((funcionario) => {
        return (
          <FuncionarioPessoa key={funcionario.id} funcionario={funcionario} index={funcionario.id} />
        );
      })}
    </div>
  );
}
