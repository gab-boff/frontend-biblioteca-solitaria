import DefaultLogo from "../../images/png/logo-default.png";

import "./styles.scss";
import { Link } from "react-router-dom";

const Card = ({ project }: any) => {
  return (
    <div className="card-container">
      <div className="links-container">
        <div className="links">
          <Link to={project.linkProjeto || ""} target="_blank">
            <h2>Sobre o Projeto</h2>
          </Link>
          <Link to={project.linkAplicacao} target="_blank">
            <h2>Aplicação</h2>
          </Link>
          <Link to={project.linkGitHub} target="_blank">
            <h2>GitHub</h2>
          </Link>
        </div>
      </div>
      <div className="icon-container">
        <img src={DefaultLogo} alt="" />
      </div>
      <div className="content">
        <h3>{project.nomeProjeto}</h3>
        <p>{project.descricaoProjeto}</p>
      </div>
    </div>
  );
};

export default Card;
