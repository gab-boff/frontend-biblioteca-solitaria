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
          <li key={item.title}>{item.title}</li>
        ))}
      </Header>
    </div>
  );
};

export default Home;
