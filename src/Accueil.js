import React, { Component } from "react";
import SectionAccueil from "./SectionAccueil.js";

class Accueil extends Component {
  render() {
    const pageTitle = "Bienvenue";
    const slogan = "Entrez un lieu et retrouvez les activités à proximité.";
    const content =
      "Vous trouverez toutes les informations facilitant vos déplacements afin de profiter pleinement des Jeux.";

    const tableData1 = "Nom";
    const tableData2 = "Adresse";

    const idSitesCompetition = "paris-2024-sites-de-competition";
    const dataNameSitesCompetition = "sports";
    const dataAddressSitesCompetition = "nom_site";

    const idOlympiade = "paris-2024-evenements-olympiade-culturelle";
    const dataNameOlympiade = "name";
    const dataAddressOlympiade = "adresse_c";

    const idBoutiques = "paris-2024-boutiques-officielles";
    const dataNameBoutiques = "title";
    const dataAddressBoutiques = "address";

    const idCentresPreparation = "paris-2024-centres-de-preparation-aux-jeux";
    const dataNameCentresPreparation = "title";
    const dataAddressCentresPreparation = "subtitle";

    const idVolontaires = "carte-aide-volontaires";
    const dataNameVolontaires = "type_de_point";
    const dataAddressVolontaires = "commune";

    const idParkings = "paris-2024-parkings-velo-spectateurs-en-idf";
    const dataNameParkings = "nom_site";
    const dataAddressParkings = "adresse_du_parking_velo";

    return (
      <div>
        <SectionAccueil
          pageTitle={pageTitle}
          slogan={slogan}
          content={content}
          tableData1={tableData1}
          tableData2={tableData2}
          idSitesCompetition={idSitesCompetition}
          dataNameSitesCompetition={dataNameSitesCompetition}
          dataAddressSitesCompetition={dataAddressSitesCompetition}
          idOlympiade={idOlympiade}
          dataNameOlympiade={dataNameOlympiade}
          dataAddressOlympiade={dataAddressOlympiade}
          idBoutiques={idBoutiques}
          dataNameBoutiques={dataNameBoutiques}
          dataAddressBoutiques={dataAddressBoutiques}
          idCentresPreparation={idCentresPreparation}
          dataNameCentresPreparation={dataNameCentresPreparation}
          dataAddressCentresPreparation={dataAddressCentresPreparation}
          idVolontaires={idVolontaires}
          dataNameVolontaires={dataNameVolontaires}
          dataAddressVolontaires={dataAddressVolontaires}
          idParkings={idParkings}
          dataNameParkings={dataNameParkings}
          dataAddressParkings={dataAddressParkings}
        />
      </div>
    );
  }
}

export default Accueil;
