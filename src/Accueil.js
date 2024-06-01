import React, { Component } from "react";
import SectionAccueil from "./SectionAccueil.js";

class Accueil extends Component {
  render () {
    const pageTitle = "Bienvenue";
    const slogan = "Entrez un lieu et retrouvez les activités à proximité.";
    const content = "Vous trouverez toutes les informations facilitant vos déplacements afin de profiter pleinement des Jeux.";
    return (
      <div>
        <SectionAccueil 
          pageTitle={pageTitle}
          slogan={slogan}
          content={content}
        />
      </div>
    );
  };
};

export default Accueil;
