// import EquipeImg from "../../../../assets/img/quemSomos/equipe.png";
import NilaImg from "../../../../assets/img/equipe/nila.png";
import ListaFuncionarios from "../../../listas/funcionario/ListaFuncionarios";
import funcionarios from "../../../constants/funcionarios";

export default function Equipe() {
  return (
    <div className="px-40 py-20">
      <h1 className="text-4xl font-bold ml-8 mb-10">
        Nossa <span className="text-gray-500">Equipe</span>
      </h1>
      {/* <div className="h-screen flex items-center justify-center overflow-hidden bg-gray-400 relative">
        <img
          src={EquipeImg}
          alt=""
          className="w-3/4 object-cover brightness-50"
        />
        <h1 className="absolute text-white text-7xl">Nossa Equipe</h1>
      </div> */}
      <div className="flex justify-start mt-20 gap-20 ml-8">
        <div>
          <img src={NilaImg} alt="" />
        </div>
        <div className="flex flex-col p-20 gap-12">
          <div>
            <h1 className="text-5xl">Nila Queiroz</h1>
            <p>Diretora Geral de Monitoramento e Gestão Estratégica</p>
          </div>
          <p className="w-[800px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            dolores soluta doloribus enim, corrupti tenetur omnis minima vitae
            officia, quae provident exercitationem libero aspernatur? Ipsum
            totam aperiam hic, iste vero corrupti in nesciunt cupiditate eos
            dignissimos voluptatum minima voluptate? Distinctio, iste sapiente
            optio ratione molestiae expedita pariatur amet laborum vitae soluta
            quas aliquam qui repellendus impedit, porro fugit voluptatibus sequi
            et quibusdam commodi reiciendis officia, hic ducimus necessitatibus.
            Totam quam rerum consequuntur velit harum animi facilis! Vel debitis
            soluta, delectus eligendi alias aperiam. Animi nemo dolor ipsa.
            Optio consectetur blanditiis rerum, magnam, facere odio, voluptate
            iste quam nisi molestias sunt.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <ListaFuncionarios funcionarios={funcionarios} />
      </div>
    </div>
  );
}
