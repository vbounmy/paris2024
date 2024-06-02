import React, { Component } from "react";
import SectionOlympiade from "./SectionOlympiade.js";

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
    const dataType3 = "lieu_de_presentation_c";
    const dataType4 = "adresse_c";
    const dataType5 = "date_de_debut_c";
    const dataType6 = "date_de_fin_c";
    const dataType7 = "tarif_du_projet_c";
    const dataType8 = "veuillez_preciser_les_tarifs_du_projet_c";
    const dataType9 = "discipline_principale_du_projet_c";
    const tableData1 = "Nom de l'évènement";
    const tableData2 = "Description";
    const tableData3 = "Lieu";
    const tableData4 = "Adresse";
    const tableData5 = "Date de début";
    const tableData6 = "Date de fin";
    const tableData7 = "Tarif";
    const tableData8 = "Tarif_2";
    const tableData9 = "Discipline";

    return (
      <div>
        <SectionOlympiade
          pageTitle={pageTitle}
          slogan={slogan}
          dataId={dataId}
          dataType1={dataType1}
          dataType2={dataType2}
          dataType3={dataType3}
          dataType4={dataType4}
          dataType5={dataType5}
          dataType6={dataType6}
          dataType7={dataType7}
          dataType8={dataType8}
          dataType9={dataType9}
          tableData1={tableData1}
          tableData2={tableData2}
          tableData3={tableData3}
          tableData4={tableData4}
          tableData5={tableData5}
          tableData6={tableData6}
          tableData7={tableData7}
          tableData8={tableData8}
          tableData9={tableData9}
        />
      </div>
    );
  };
};

export default OlympiadeCulturelle;