import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Header from "../../components/Header";
import Card from "../../components/Card";

import "./styles.scss";

import { headerItemsNewCurriculum as headerItems } from "../../utils/tableColumnData";
import { getData } from "../../api/api";

const NewCurriculumById = () => {
  const location = useLocation();

  const [pageId, setPageId] = useState(location.pathname.split("/")[2]);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setPageId(location.pathname.split("/")[2]);
  }, [location]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setData(
          data.filter(
            (item: any) => item.fase === Number(pageId) && item.matriz === 2023,
          ),
        );
      } catch (error) {
        console.error("Error occurred while fetching report list:", error);
      }
    };

    fetchData();
  }, [pageId]);

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
          {data.map((item) => (
            <Card project={item} key={item.nomeProjeto} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default NewCurriculumById;
