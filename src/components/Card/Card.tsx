import React from "react";

import DefaultLogo from "../../images/png/logo-default.png";

import "./styles.scss";

const Card = () => {
  return (
    <div className="card">
        <div className="icon-container">
        <img src={DefaultLogo} alt="" />
        </div>
    </div>
  );

};

export default Card;
