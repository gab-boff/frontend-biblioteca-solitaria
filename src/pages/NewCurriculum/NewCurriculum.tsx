import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

import "./styles.scss";

import { headerItemsNewCurriculum as headerItems } from "../../utils/tableColumnData";

const NewCurriculum = () => {
  return (
    <div className="container">
      <Header>
        {headerItems.map((item) => (
          <Link className="remove-a-style" to={item.link} key={item.title}>
            <li key={item.title}>{item.title}</li>
          </Link>
        ))}
      </Header>
      <main className="main">
        <h1>Portfólio de Projetos do Curso de ADS</h1>
        <section>
          <h2>O Problema</h2>
          <p>
            Os projetos de PMI - Projeto Multidisciplinar Integrador - do Curso
            de ADS são desenvolvidos pelos alunos durante as 6 fases Curso.
          </p>
          <p>Em cada uma diferentes artefatos são gerados:</p>
          <ul>
            <li>Fase 1 - Apresentação do Ideia e Modelagem de Negócio</li>
            <li>Fase 2 - Protótipo e Modelagem do Sistema</li>
            <li>Fase 3 - Codificação</li>
            <li>Fase 4 - Produto Final</li>
          </ul>
          <p>
            Para os alunos e professores envolvidos há dificuldade em manter um
            só local para a visualização dos artefatos e o acompanhamento da
            evolução dos Projetos.
          </p>
        </section>
        <section>
          <h2>A Solução</h2>
          <p>
            Com a participação dos Alunos da Fase 1 - 2021-2, foi criado um Site
            que possibilita apresentar os Projetos com seus dados básicos e
            links para os repositórios com protótipos, documentação e códigos
            fonte. Assim, será possivel dar maior transparência na Comunicação
            da Evolução do Projeto para os alunos e professores. O Cesusc ainda
            poderá apresentar a comunidade os estudos desenvolvidos pelos alunos
            do Curso de ADS.
          </p>
        </section>
      </main>
    </div>
  );
};

export default NewCurriculum;
