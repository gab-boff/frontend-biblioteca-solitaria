import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Header from "../../components/Header";
import Card from "../../components/Card";

import "./styles.scss";

import { headerItemsOldCurriculum as headerItems } from "../../utils/tableColumnData";

const OldCurriculumById = () => {
  const location = useLocation();

  const repeat = [1, 2, 3, 4, 5, 6, 7, 8];

  const [pageId, setPageId] = useState(location.pathname.split("/")[2]);

  useEffect(() => {
    setPageId(location.pathname.split("/")[2]);
  }, [location]);

  return (
    <div className="container-id">
      <Header>
        {headerItems.map((item) => (
          <Link className="remove-a-style" to={item.link} key={item.title}>
            <li key={item.title}>{item.title}</li>
          </Link>
        ))}
      </Header>
      <main className="main">
        <h1>Portfólio de Projetos do Curso de ADS</h1>
        <h2>{pageId !== "concluidos" ? `${pageId}ª Fase` : "Concluídos"}</h2>
        <section className="card-wrapper">
          {repeat.map((item) => (
            <Card key={item} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default OldCurriculumById;
