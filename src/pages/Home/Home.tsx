import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

const headerItems = [
  {
    title: "Currículo Antigo",
    link: "/old-curriculum",
  },
  {
    title: "Currículo Novo",
    link: "/new-curriculum",
  },
];

const Home = () => {
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

export default Home;
