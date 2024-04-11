export default function QuemSomos() {
  return (
    <div className="px-40 py-20">
      <h1 className="text-4xl font-bold ml-8 mb-10">
        Somos a <span className="text-gray-500">DGMOG</span>
      </h1>
      <div className="flex flex-col gap-2 items-center justify-center h-screen ml-8">
        <p className="mb-5">
          A{" "}
          <span className="font-bold">
            Diretoria Geral de Monitoramento e Gestão Estratégica - DGMOG
          </span>
          , tem por objetivo central de auxiliar o grupo da pasta na melhoria
          dos processos internos da instituição e da implantação da cultura de
          monitoramento e gestão estratégica no órgão, pilares fundamentais à
          modernização da gestão de saúde pública.
        </p>
        <div className="flex flex-col items-start justify-center gap-2">
          <span className="font-bold">Atribuições:</span>
          <ul className="mb-20">
            <li>
              • Monitorar a gestão estratégica a partir da definição de metas
              prioritárias à gestão da SES;
            </li>
            <li>
              • Fornecer ferramentas para acompanhamento e monitoramento dos
              indicadores de gestão;
            </li>
            <li>
              • Manutenção da coesão visual de produtos da Gestão por meio da
              elaboração de apresentações, relatórios e qualquer produto que se
              faça necessário;
            </li>
            <li>
              • Desenvolvimento de painéis de Business Intelligence (BI)
              possibilitando melhor eficiência no acesso desses dados seja pelas
              lideranças da SES, do Estado ou pela população em geral;
            </li>
            <li>
              • Manter a segurança dos dados, garantindo que os dados sejam
              precisos, completos e consistentes;
            </li>
            <li>
              • Desenvolver e aplicar algoritmos de aprendizado de máquina,
              estatística e modelagem para criar previsões, classificações e
              recomendações precisas;
            </li>
            <li>
              • Integrar fontes de dados heterogêneas e complexas para facilitar
              a análise de dados;
            </li>
            <li>
              • Trabalhar em colaboração com especialistas em negócios,
              desenvolvedores de software e outros profissionais de TI para
              garantir que os resultados dos projetos de análise estejam
              alinhados com os objetivos da organização;
            </li>
            <li>
              • Continuamente aprender novas técnicas e tecnologias para se
              manter atualizado no campo em evolução da análise de dados.
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-around w-full">
          <div className="bg-gray-300 w-[500px] h-[500px] rounded-3xl"></div>
          <div className="bg-gray-300 w-[500px] h-[500px] rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
}
