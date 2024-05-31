import React, { Component } from "react";
import SectionRecherche from "./SectionRecherche.js";

class CentresPreparation extends Component {
  render () {
    const pageTitle = "Centres de préparation";
    const slogan = "Entrez un lieu et retrouvez tous les centres de préparation à proximité.";
    return (
      <div>
        <SectionRecherche 
          pageTitle={pageTitle}
          slogan={slogan}
        />
      </div>
    );
  };
};

export default CentresPreparation;
