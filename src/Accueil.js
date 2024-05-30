import React, { Component } from "react";
import SectionRecherche from "./SectionRecherche.js";

class Accueil extends Component {
  render () {
    const title = "Bienvenue";
    const slogan = "Entrez un lieu et retrouvez les activités à proximité.";
    const content = "Vous trouverez toutes les informations facilitant vos déplacements afin de profiter pleinement des Jeux.";
    return (
      <div>
        <SectionRecherche 
          title={title}
          slogan={slogan}
          content={content}
        />
      </div>
    );
  };
};

export default Accueil;
