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
    const dataId = "paris-2024-parkings-velo-spectateurs-en-idf";
    const dataType1 = "site";
    const dataType2 = "nom_site";
    const dataType3 = "adresse_du_parking_velo";
    const tableData1 = "Code site";
    const tableData2 = "Nom du site";
    const tableData3 = "Adresse du parking vélo";
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

export default ParkingsVelo;