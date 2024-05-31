import React, { Component } from "react";
import SectionRecherche from "./SectionRecherche.js";

class ParkingsVelo extends Component {
  render () {
    const pageTitle = (
      <>
      Parkings vélo
      <br/>
      spectateurs en IDF
      </>
    );
    const slogan = "Entrez un lieu et retrouvez tous les parkings vélo à proximité.";
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

export default ParkingsVelo;