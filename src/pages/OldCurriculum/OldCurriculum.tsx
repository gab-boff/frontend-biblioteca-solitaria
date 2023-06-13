import Header from "../../components/Header/Header";

const headerItems = [
  {
    title: "1ª Fase",
    link: "/old-curriculum/1",
  },
  {
    title: "2ª Fase",
    link: "/old-curriculum/2",
  },
  {
    title: "3ª Fase",
    link: "/old-curriculum/3",
  },
  {
    title: "4ª Fase",
    link: "/old-curriculum/4",
  },
  {
    title: "5ª Fase",
    link: "/old-curriculum/5",
  },
  {
    title: "6ª Fase",
    link: "/old-curriculum/6",
  },
  {
    title: "Concluídos",
    link: "/old-curriculum/concluidos",
  },
];

const OldCurriculum = () => {
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

export default OldCurriculum;
