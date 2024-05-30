import React, { Component } from "react";
import SectionRecherche from "./SectionRecherche.js";

class SitesCompetition extends Component {
  render () {
    const title = "Sites de compétition";
    const slogan = "Entrez un lieu et retrouvez tous les sites de compétition à proximité.";
    return (
      <div>
        <SectionRecherche 
          title={title}
          slogan={slogan}
        />
      </div>
    );
  };
};

export default SitesCompetition;