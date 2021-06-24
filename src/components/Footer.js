import React from "react";
import "./Footer.css";
import LeReacteur from "../img/le-reacteur-logo.png";
import GitHub from "../img/github-logo.png";

const Footer = () => {
  return (
    <div>
      <p>
        Made with <span className="reactWord">React</span> at&nbsp;
        <span className="reacteurWord">Le Reacteur</span>
        <a
          className="lereacteur"
          href="https://www.lereacteur.io"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;
          <img src={LeReacteur} alt="LeReateur" className="logoReacteur" />
          &nbsp;
        </a>
        by <span className="owner">Frédéric Desseaux</span>&nbsp;
        <a
          href="https://github.com/Frederic2607"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GitHub} alt="gitHub" className="logoGit" />
        </a>
      </p>
    </div>
  );
};

export default Footer;
