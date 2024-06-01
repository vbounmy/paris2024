import React, { Component } from "react";
import SectionRecherche from "./SectionRecherche.js";

class SitesCompetition extends Component {
  render () {
    const pageTitle = "Sites de compétition";
    const slogan = "Entrez un lieu ou un sport et retrouvez vos sites de compétition préférés.";
    const dataId = "paris-2024-sites-de-competition";
    const dataType1 = "code_site";
    const dataType2 = "nom_site";
    const dataType3 = "sports";
    const tableData1 = "Code site";
    const tableData2 = "Nom du site";
    const tableData3 = "Sports";
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

export default SitesCompetition;