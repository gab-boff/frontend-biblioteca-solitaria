import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

import "./styles.scss";

import { headerItemsHome as headerItems } from "../../utils/tableColumnData";

const Home = () => {
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
        <h1>Sobre o Curso</h1>
        <section>
          <p>
            O Curso de Análise e Desenvolvimento de Sistemas busca atender
            plenamente às necessidades do mercado de TI, com disciplinas
            formadoras que garantem o conhecimento mediante o equilíbrio entre
            teoria e prática, fornecendo uma formação diferenciada e qualitativa
            por trilhas de conhecimento com foco em tecnologias emergentes do
            mercado atual.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
