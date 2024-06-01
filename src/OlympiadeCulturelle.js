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
    const dataId = "paris-2024-evenements-olympiade-culturelle";
    const dataType1 = "name";
    const dataType2 = "presentation_synthetique_du_projet_c";
    const dataType3 = "adresse_c";
    const tableData1 = "Nom de l'évènement";
    const tableData2 = "Description";
    const tableData3 = "Adresse";
    return (
      <div>
        <SectionRecherche 
          pageTitle={pageTitle}
          slogan={slogan}
          dataId={dataId}
          dataType1={dataType1}
          dataType2={dataType2}
          dataType3={dataType3}
          tableData1={tableData1}
          tableData2={tableData2}
          tableData3={tableData3}
        />
      </div>
    );
  };
};

export default OlympiadeCulturelle;