import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Funcionario from "../../model/Funcionario";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

interface FuncionarioItemProps {
  funcionario: Funcionario;
  index: number;
}

export default function FuncionarioPessoa(props: FuncionarioItemProps) {
  const { funcionario, index } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <div className="cursor-pointer">
      <motion.div
        ref={ref}
        initial="hidden"
        variants={imageVariants}
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: index * animationDelay }}
        whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
        whileTap={{ scale: 0.9 }}
        custom={index}
      >
        <img
          src={funcionario.imagem}
          alt={`Foto de ${funcionario.nome}`}
          onClick={handleOpen}
        />
      </motion.div>
      <Dialog
        open={open}
        handler={handleOpen}
        className="flex flex-col items-start justify-center mt-5"
      >
        <DialogHeader className="flex flex-col items-start justify-center">
          <span>{funcionario.nome}</span>
          <span className="font-normal text-sm">{funcionario.cargo}</span>
          <Link
            to={funcionario.linkedin}
            className="bg-[#0e76a8] text-white py-2 px-4 text-sm rounded-md mt-2"
          >
            LinkedIn
          </Link>
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
          <Button
            variant="gradient"
            color="green"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Ok</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
