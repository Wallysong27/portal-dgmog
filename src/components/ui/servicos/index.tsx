import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
// import BgBi from "../../../assets/img/nossosServicos/bg-bi.png";
import BgCispe from "../../../assets/img/nossosServicos/bg-cispe.png";
import bgConass from "../../../assets/img/nossosServicos/bg-conass.png";
// import BgEspecialidades from "../../../assets/img/nossosServicos/bg-especialidades.png";
import BgFluxos from "../../../assets/img/nossosServicos/bg-fluxos.png";
// import BgMapa from "../../../assets/img/nossosServicos/bg-mapa.png";
import bgChamados from "../../../assets/img/nossosServicos/bg-chamados.png";

export default function NossosServicos() {
  // const refBi = useRef(null);
  const refCispe = useRef(null);
  const refConass = useRef(null);
  // const refEspecialidades = useRef(null);
  const refFluxos = useRef(null);
  // const refMapas = useRef(null);
  const refChamados = useRef(null);

  // const isInViewBi = useInView(refBi, { once: true });
  const isInViewCispe = useInView(refCispe, { once: true });
  const isInViewConass = useInView(refConass, { once: true });
  // const isInViewEspecialidades = useInView(refEspecialidades, { once: true });
  const isInViewFluxos = useInView(refFluxos, { once: true });
  // const isInViewMapas = useInView(refMapas, { once: true });
  const isInViewChamados = useInView(refChamados, { once: true });

  return (
    <div className="px-40 py-20">
      <h1 className="text-4xl font-bold ml-8 mb-10">
        Nossos <span className="text-gray-500">Serviços</span>
      </h1>
      <div className="flex flex-col gap-5 items-center justify-center h-full">
        <div className="flex gap-5">
          <div className="cursor-pointer">
            <motion.div
              ref={refCispe}
              style={{
                transform: isInViewCispe ? "none" : "translateX(-200px)",
                opacity: isInViewCispe ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <img src={BgCispe} alt="" />
            </motion.div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="cursor-pointer">
              <motion.div
                ref={refFluxos}
                style={{
                  transform: isInViewFluxos ? "none" : "translateX(200px)",
                  opacity: isInViewFluxos ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <img src={BgFluxos} alt="" />
              </motion.div>
            </div>

            <div className="cursor-pointer">
              <motion.div
                ref={refChamados}
                style={{
                  transform: isInViewChamados ? "none" : "translateX(200px)",
                  opacity: isInViewChamados ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <img src={bgChamados} alt="" />
              </motion.div>
            </div>
          </div>
          {/* <div className="flex flex-col gap-5">
            <div className="cursor-pointer">
              <motion.div
                ref={refMapas}
                style={{
                  transform: isInViewMapas ? "none" : "translateX(200px)",
                  opacity: isInViewMapas ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <img src={BgMapa} alt="" />
              </motion.div>
            </div>

            <div className="cursor-pointer">
              <motion.div
                ref={refEspecialidades}
                style={{
                  transform: isInViewEspecialidades
                    ? "none"
                    : "translateX(200px)",
                  opacity: isInViewEspecialidades ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <img src={BgEspecialidades} alt="" />
              </motion.div>
            </div>
          </div> */}
        </div>
        {/* <div className="flex gap-5">
          <div className="flex flex-col gap-5">
            <div className="cursor-pointer">
              <motion.div
                ref={refChamados}
                style={{
                  transform: isInViewChamados ? "none" : "translateX(-200px)",
                  opacity: isInViewChamados ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <img src={bgChamados} alt="" />
              </motion.div>
            </div>

            <div className="cursor-pointer">
              <motion.div
                ref={refFluxos}
                style={{
                  transform: isInViewFluxos ? "none" : "translateX(-200px)",
                  opacity: isInViewFluxos ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <img src={BgFluxos} alt="" />
              </motion.div>
            </div>
          </div>

          <div className="cursor-pointer">
            <motion.div
              ref={refBi}
              style={{
                transform: isInViewBi ? "none" : "translateX(200px)",
                opacity: isInViewBi ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <img src={BgBi} alt="" />
            </motion.div>
          </div>
        </div> */}
        <div className="cursor-pointer">
          <motion.div
            ref={refConass}
            style={{
              transform: isInViewConass ? "none" : "translateY(200px)",
              opacity: isInViewConass ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <img src={bgConass} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
