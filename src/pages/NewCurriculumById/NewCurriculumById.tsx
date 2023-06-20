import { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";

import "./styles.scss";

import { headerItemsNewCurriculum as headerItems } from "../../utils/tableColumnData";

const NewCurriculumById = () => {
  const location = useLocation();

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
        <section></section>
      </main>
    </div>
  );
};

export default NewCurriculumById;
