import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Funcionario from "../../model/Funcionario";
import { useState } from "react";

interface FuncionarioItemProps {
  funcionario: Funcionario;
}

export default function FuncionarioPessoa(props: FuncionarioItemProps) {
  const { funcionario } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="cursor-pointer">
      <img
        src={funcionario.imagem}
        alt={`Foto de ${funcionario.nome}`}
        onClick={handleOpen}
      />
      <Dialog
        open={open}
        handler={handleOpen}
        className="flex flex-col items-start justify-center mt-5"
      >
        <DialogHeader className="flex flex-col items-start justify-center">
          <span>{funcionario.nome}</span>
          <span className="font-normal text-sm">{funcionario.cargo}</span>
        </DialogHeader>
        <DialogBody>
          <div className="mt-2 p-5">
            {funcionario.formacoes.map((formacao, index) => (
              <ul key={index} className="mb-1 list-disc">
                <li>{formacao}</li>
              </ul>
            ))}
          </div>
        </DialogBody>
        <DialogFooter className="absolute bottom-0 right-0">
          <Button variant="gradient" color="green" onClick={handleOpen} className="mr-1">
            <span>Ok</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
