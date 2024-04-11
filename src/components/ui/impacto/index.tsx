// import Logo from "../../../assets/img/quemSomos/teste.webp";

export default function Impacto() {
  return (
    <div className="flex items-center justify-evenly h-screen">
      <div className="flex flex-col items-end justify-evenly h-[500px] basis-1/4">
        <div className="flex flex-col leading-none justify-center items-start border-b border-gray-300 w-1/2">
          <h1 className="text-[100px] -ml-3">100</h1>
          <p className="text-lg mb-1">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="flex flex-col leading-none justify-center items-start border-b border-gray-300 w-1/2">
          <h1 className="text-[100px] -ml-3">100</h1>
          <p className="text-lg mb-1">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="relative flex h-[500px] w-[320px]">
        <div
          className="relative left-0 bg-gradient-to-b from-[#4D00FF] from-10% via-[#1F64FF] via-30% to-[#15B3FF] to-90% w-full h-full basis-1/2"
          style={{
            transform: "skew(0deg, -30deg)",
          }}
        >
            <h1 className="absolute left-[50%] top-[42%] transform -translate-x-[50%] -rotate-90 text-[70px]">
            CISPE
          </h1>
        </div>
        {/* <div
          className="relative left-0 bg-gradient-to-b from-[#35E6C0] from-10% via-[#42E000] via-30% to-[#90E300] to-90% w-full h-full basis-1/2"
          style={{
            transform: "skew(0deg, -30deg)",
          }}
        ></div> */}
        <div
          className="relative -left-10 bg-gradient-to-b from-[#FECA00] from-10% via-[#FEAC00] via-30% to-[#FF6400] to-90% w-full h-full basis-1/2"
          style={{
            transform: "skew(0deg, -30deg)",
          }}
        >
          <h1 className="absolute left-[50%] top-[42%] transform -translate-x-[50%] -rotate-90 text-[70px]">
            DGMOG
          </h1>
        </div>
        {/* <div
          className="relative -left-10 top-14 bg-orange-500 w-full h-full basis-1/2"
          style={{
            transform: "skew(0deg, -30deg)",
          }}
        >
          <img src={Logo} alt="" className="w-full h-full" />
        </div> */}
      </div>
      <div className="flex flex-col items-start justify-evenly h-[500px] basis-1/4">
        <div className="flex flex-col leading-none justify-center items-start border-b border-gray-300 w-1/2">
          <h1 className="text-[100px] -ml-3">100</h1>
          <p className="text-lg mb-1">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="flex flex-col leading-none justify-center items-start border-b border-gray-300 w-1/2">
          <h1 className="text-[100px] -ml-3">100</h1>
          <p className="text-lg mb-1">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
}
