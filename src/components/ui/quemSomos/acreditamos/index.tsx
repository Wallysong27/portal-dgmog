import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import AcreditamosImg from "../../../../assets/img/quemSomos/acreditamos.jpg";

export default function Acreditamos() {
  const refTitleMissao = useRef(null);
  const refBodyMissao = useRef(null);
  const refTitleVisao = useRef(null);
  const refBodyVisao = useRef(null);
  const refTitleValores = useRef(null);
  const refBodyValores = useRef(null);

  const isInViewTitleMissao = useInView(refTitleMissao, { once: true });
  const isInViewBodyMissao = useInView(refBodyMissao, { once: true });
  const isInViewTitleVisao = useInView(refTitleVisao, { once: true });
  const isInViewBodyVisao = useInView(refBodyVisao, { once: true });
  const isInViewTitleValores = useInView(refTitleValores, { once: true });
  const isInViewBodyValores = useInView(refBodyValores, { once: true });

  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center overflow-hidden relative">
        <img
          src={AcreditamosImg}
          alt="Acreditamos"
          className="object-cover w-full h-full brightness-50"
        />
        <h1 className="absolute text-white text-7xl">No que Acreditamos</h1>
      </div>
      <div className="flex flex-col items-center justify-center h-screen my-20 gap-5">
        <div className="flex flex-col items-center justify-center mb-10">
          <motion.h1
            ref={refTitleMissao}
            style={{
              transform: isInViewTitleMissao ? "none" : "translateX(-200px)",
              opacity: isInViewTitleMissao ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="mb-5 text-5xl font-bold"
          >
            Missão
          </motion.h1>
          <motion.div
            ref={refBodyMissao}
            style={{
              transform: isInViewBodyMissao ? "none" : "translateX(200px)",
              opacity: isInViewBodyMissao ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="flex flex-col items-center justify-center gap-5"
          >
            <p className="text-center w-[600px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              possimus libero esse ea sed hic ad quos deleniti ut explicabo
              praesentium iure quis eveniet incidunt dolor asperiores expedita,
              commodi consectetur blanditiis cumque ipsum at. Voluptas natus
              iste est suscipit, consequuntur error, modi ipsum aut incidunt
              ratione mollitia, facere aliquam debitis.
            </p>
            <button className="w-80 h-10 bg-gray-300 rounded-lg"></button>
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center mb-10">
          <motion.h1
            ref={refTitleVisao}
            style={{
              transform: isInViewTitleVisao ? "none" : "translateX(200px)",
              opacity: isInViewTitleVisao ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="mb-5 text-5xl font-bold"
          >
            Visão
          </motion.h1>
          <motion.div
            ref={refBodyVisao}
            style={{
              transform: isInViewBodyVisao ? "none" : "translateX(-200px)",
              opacity: isInViewBodyVisao ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="flex flex-col items-center justify-center gap-5"
          >
            <p className="text-center w-[600px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              possimus libero esse ea sed hic ad quos deleniti ut explicabo
              praesentium iure quis eveniet incidunt dolor asperiores expedita,
              commodi consectetur blanditiis cumque ipsum at. Voluptas natus
              iste est suscipit, consequuntur error, modi ipsum aut incidunt
              ratione mollitia, facere aliquam debitis.
            </p>
            <button className="w-80 h-10 bg-gray-300 rounded-lg"></button>
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center mb-10">
          <motion.h1
            ref={refTitleValores}
            style={{
              transform: isInViewTitleValores ? "none" : "translateX(200px)",
              opacity: isInViewTitleValores ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="mb-5 text-5xl font-bold"
          >
            Valores
          </motion.h1>
          <motion.div
            ref={refBodyValores}
            style={{
              transform: isInViewBodyValores ? "none" : "translateX(-200px)",
              opacity: isInViewBodyValores ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="flex flex-col items-center justify-center gap-5"
          >
            <p className="text-center w-[600px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              possimus libero esse ea sed hic ad quos deleniti ut explicabo
              praesentium iure quis eveniet incidunt dolor asperiores expedita,
              commodi consectetur blanditiis cumque ipsum at. Voluptas natus
              iste est suscipit, consequuntur error, modi ipsum aut incidunt
              ratione mollitia, facere aliquam debitis.
            </p>
            <button className="w-80 h-10 bg-gray-300 rounded-lg"></button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
