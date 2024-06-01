import React, { Component } from "react";
import SectionRecherche from "./SectionRecherche.js";

class CentresPreparation extends Component {
  render () {
    const pageTitle = "Centres de préparation";
    const slogan = "Entrez un lieu et retrouvez tous les centres de préparation à proximité.";
    const dataId = "centres-de-preparation-aux-jeux";
    const dataType1 = "title";
    const dataType2 = "subtitle";
    const dataType3 = "description";
    const tableData1 = "Nom du centre";
    const tableData2 = "Commune ou agglomération";
    const tableData3 = "Description";
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

export default CentresPreparation;
