import React, { Component } from "react";
import SectionRecherche from "./SectionRecherche.js";

class ParkingsVelo extends Component {
  render () {
    const title = "Parkings vélo spectateurs en IDF";
    const slogan = "Entrez un lieu et retrouvez tous les parkings vélo à proximité.";
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

export default ParkingsVelo;