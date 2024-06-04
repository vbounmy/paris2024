import React, { Component } from "react";
import SectionRecherche from "./SectionRecherche.js";

class CarteAideVolontaires extends Component {
  render () {
    const pageTitle = (
      <>
      Carte d'aide
      <br/>
      pour les volontaires Paris 2024
      </>
    );
    const slogan = "Trouvez toutes les informations concernant les cartes d'aide pour les volontaires Paris 2024.";
    const dataId = "carte-aide-volontaires";
    const dataType1 = "type_de_point";
    const dataType2 = "horaire";
    const dataType3 = "commune"
    const tableData1 = "Type de point";
    const tableData2 = "Horaires";
    const tableData3 = "Commune"
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

export default CarteAideVolontaires;