import CrescimentoImg from "../../../../assets/img/quemSomos/crescimento.png";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Crescimento() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex h-screen">
      <div>
        <img
          src={CrescimentoImg}
          alt="Pernambuco em Constante Crescimento"
          className="w-full object-cover h-full"
        />
      </div>
      <div className="flex-grow flex flex-col items-center justify-center text-white gap-5">
        <motion.div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="flex gap-5 w-[500px] border-b border-gray-300 pt-5 pb-10 text-gray-600"
        >
          <h1 className="text-7xl flex-1 text-right">20%</h1>
          <p className="flex-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            praesentium!
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="flex gap-5 w-[500px] border-b border-gray-300 pt-5 pb-10 text-gray-600"
        >
          <h1 className="text-7xl flex-1 text-right">60%</h1>
          <p className="flex-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            enim?
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="flex gap-5 w-[500px] border-b border-gray-300 pt-5 pb-10 text-gray-600"
        >
          <h1 className="text-7xl flex-1 text-right">300</h1>
          <p className="flex-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            iusto?
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="flex gap-5 w-[500px] border-b border-gray-300 pt-5 pb-10 text-gray-600"
        >
          <h1 className="text-7xl flex-1 text-right">250</h1>
          <p className="flex-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Recusandae, iste!
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="flex gap-5 w-[500px] pt-5 pb-10 text-gray-600"
        >
          <h1 className="text-7xl flex-1 text-right">100</h1>
          <p className="flex-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
            saepe?
          </p>
        </motion.div>
      </div>
    </div>
  );
}
