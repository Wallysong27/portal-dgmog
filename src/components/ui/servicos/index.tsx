import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import BgBi from "../../../assets/img/nossosServicos/bg-bi.png";
import BgAppsWeb from "../../../assets/img/nossosServicos/bg-appsWeb.png";
import bgRpa from "../../../assets/img/nossosServicos/bg-rpa.png";
import bgConass from "../../../assets/img/nossosServicos/bg-conass.png";

export default function NossosServicos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="px-40 py-20">
      <h1 className="text-4xl font-bold ml-8">
        Nossos <span className="text-gray-500">Serviços</span>
      </h1>
      <div className="flex flex-col gap-5 items-center justify-center h-screen">
        <div className="flex gap-5">
          <div className="cursor-pointer">
            <motion.div
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <img src={BgBi} alt="" />
            </motion.div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="cursor-pointer">
              <motion.div
                ref={ref}
                style={{
                  transform: isInView ? "none" : "translateX(200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <img src={BgAppsWeb} alt="" />
              </motion.div>
            </div>
            <div className="cursor-pointer">
              <motion.div
                ref={ref}
                style={{
                  transform: isInView ? "none" : "translateX(200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <img src={bgRpa} alt="" />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer">
          <motion.div
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <img src={bgConass} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
    // <div className="relative flex items-center justify-center h-screen">
    //   <h1 className="absolute left-[200px] top-28 text-4xl font-bold">
    //     Nossos <span className="text-gray-500">Serviços</span>
    //   </h1>
    //   <div className="flex gap-5">
    //     <div>
    //       <motion.div
    //         ref={ref}
    //         style={{
    //           transform: isInView ? "none" : "translateX(-200px)",
    //           opacity: isInView ? 1 : 0,
    //           transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    //         }}
    //       >
    //         <img src={BgBi} alt="" />
    //       </motion.div>
    //     </div>
    //     <div className="flex flex-col gap-y-5">
    //       <motion.div
    //         ref={ref}
    //         style={{
    //           transform: isInView ? "none" : "translateX(-200px)",
    //           opacity: isInView ? 1 : 0,
    //           transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    //         }}
    //       >
    //         <img src={BgAppsWeb} alt="" />
    //       </motion.div>
    //       <motion.div
    //         ref={ref}
    //         style={{
    //           transform: isInView ? "none" : "translateX(-200px)",
    //           opacity: isInView ? 1 : 0,
    //           transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    //         }}
    //       >
    //         <img src={bgRpa} alt="" />
    //       </motion.div>
    //     </div>
    //   </div>
    // </div>
  );
}
