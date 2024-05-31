import React, { Component } from "react";
import SectionRecherche from "./SectionRecherche.js";

class CarteAideVolontaires extends Component {
  render () {
    const pageTitle = (
      <>
      Carte d'aide
      <br/>
      pour les volontaires Paris 2024
      </>
    );
    const slogan = "Trouvez toutes les informations concernant les cartes d'aide pour les volontaires Paris 2024.";
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

export default CarteAideVolontaires;