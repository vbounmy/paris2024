import React, { Component } from "react";
import SectionRecherche from "./SectionRecherche.js";

class SitesCompetition extends Component {
  render () {
    const pageTitle = "Sites de compétition";
    const slogan = "Entrez un lieu et retrouvez tous les sites de compétition à proximité.";
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

export default SitesCompetition;