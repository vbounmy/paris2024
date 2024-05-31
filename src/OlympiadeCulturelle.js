import React, { Component } from "react";
import SectionRecherche from "./SectionRecherche.js";

class OlympiadeCulturelle extends Component {
  render () {
    const pageTitle = (
      <>
      évènements
      <br/>
      Olympiade Culturelle
      </>
    );
    const slogan = "Entrez un lieu et retrouvez tous les évènements Olympiade Culturelle à proximité.";
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

export default OlympiadeCulturelle;