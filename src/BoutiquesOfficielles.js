import React, { Component } from "react";
import SectionRecherche from "./SectionRecherche.js";

class BoutiquesOfficielles extends Component {
  render () {
    const pageTitle = "Boutiques Officielles";
    const slogan = "Entrez un lieu et retrouvez toutes les boutiques officielles à proximité.";
    const dataId = "paris-2024-boutiques-officielles";
    const dataType1 = "title";
    const dataType2 = "address";
    const tableData1 = "Nom";
    const tableData2 = "Adresse";
    return (
      <div>
        <SectionRecherche 
          pageTitle={pageTitle}
          slogan={slogan}
          dataId={dataId}
          dataType1={dataType1}
          dataType2={dataType2}
          tableData1={tableData1}
          tableData2={tableData2}
        />
      </div>
    );
  };
};

export default BoutiquesOfficielles;