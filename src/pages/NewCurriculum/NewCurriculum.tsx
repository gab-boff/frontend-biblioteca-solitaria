import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

const headerItems = [
  {
    title: "1ª Fase",
    link: "/new-curriculum/1",
  },
  {
    title: "2ª Fase",
    link: "/new-curriculum/2",
  },
  {
    title: "3ª Fase",
    link: "/new-curriculum/3",
  },
  {
    title: "4ª Fase",
    link: "/new-curriculum/4",
  },
  {
    title: "Concluídos",
    link: "/new-curriculum/concluidos",
  },
];

const NewCurriculum = () => {
  return (
    <div>
      <Header>
        {headerItems.map((item) => (
          <Link className="remove-a-style" to={item.link} key={item.title}>
            <li key={item.title}>{item.title}</li>
          </Link>
        ))}
      </Header>
    </div>
  );
};

export default NewCurriculum;
