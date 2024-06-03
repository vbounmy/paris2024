import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import imgSitesCompetition from "./images/sites-de-competition.jpg";
import imgOlympiade from "./images/olympiade-culturelle.jpg";
import imgBoutiques from "./images/boutiques-officielles.jpg";
import imgCentres from "./images/centre-preparation.jpg";
import imgParking from "./images/parking-velo.jpg";
import imgVolontaire from "./images/volontaire.jpg";

const TitleSearchSection = (props) => {
  return (
    <div>
      <div class="page-title">
        <h1>{props.pageTitle}</h1>
        <h3>{props.slogan}</h3>
      </div>
      <div class="search-bar">
        <input
          type="text"
          placeholder="Recherche.."
          value={props.searchQuery}
          onChange={props.onSearchChange}
          onKeyDown={props.onSearchSubmit}
        />
        <div class="button-arrow">
          <button onClick={props.onSearchSubmit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 34 27"
              width="13"
              fill="white"
            >
              <path
                d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                data-name="3-Arrow Right"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const ResearchAll = (props) => {
  const { dataCat, dataId, dataName, dataAddress, tableData1, tableData2, query } = props;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = (query = '') => {
      let url = `https://data.paris2024.org/api/explore/v2.1/catalog/datasets/${dataId}/records?limit=30`;
      if (query) {
          url = `https://data.paris2024.org/api/explore/v2.1/catalog/datasets/${dataId}/records?select=${dataName}%2C${dataAddress}&where=%22${query}%22&limit=30`;
      }
      console.log('Fetching data from:', url);
      fetch(url)
          .then((result) => result.json())
          .then((result) => {
              console.log('API response:', result);
              if (result.results && Array.isArray(result.results)) {
                  const data = result.results.map(record => ({ 
                      [dataName]: record[dataName],
                      [dataAddress]: record[dataAddress],
                  }));
                  setData(data);
                  setLoading(false);
              } else {
                  console.error("Les données de l'API ne sont pas au format attendu:", result);
                  setError("Les données de l'API ne sont pas au format attendu");
                  setData([]);
                  setLoading(false);
              }
          })
          .catch(error => {
              console.error("Erreur lors de la récupération des données de l'API:", error);
              setError("Erreur lors de la récupération des données de l'API");
              setData([]);
              setLoading(false);
          });
  }

  useEffect(() => {
      fetchData(query);
  }, [query]);

  if (loading) {
      return <p>Chargement des données...</p>;
  }

  if (error) {
      return <p>{error}</p>;
  }

  return (
      <div class="content">
          <h3>{dataCat}</h3>
          <table>
            <thead>
              <tr>
                <th>{tableData1}</th>
                <th>{tableData2}</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{item[dataName]}</td>
                    <td>{item[dataAddress]}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2">Aucune donnée trouvée.</td>
                </tr>
              )}
            </tbody>
          </table>
      </div>
  );
};


class SectionAccueil extends Component {
  state = {
    searchQuery: "",
  };

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSearchSubmit = () => {
    // this.fetchData(this.state.searchQuery);
    this.setState((prevState) => ({ searchQuery: prevState.searchQuery }));
  };

  render() {
    const {
      pageTitle,
      slogan,
      content,

      tableData1,
      tableData2, 

      dataCatSitesCompetition,
      idSitesCompetition,
      dataNameSitesCompetition,
      dataAddressSitesCompetition,

      dataCatOlympiade,
      idOlympiade,
      dataNameOlympiade,
      dataAddressOlympiade,

      dataCatBoutiques,
      idBoutiques,
      dataNameBoutiques,
      dataAddressBoutiques,

      dataCatCentresPreparation,
      idCentresPreparation,
      dataNameCentresPreparation,
      dataAddressCentresPreparation,

      dataCatVolontaires,
      idVolontaires,
      dataNameVolontaires,
      dataAddressVolontaires,

      dataCatParkings,
      idParkings,
      dataNameParkings,
      dataAddressParkings,
      
    } = this.props;
    const { data, searchQuery } = this.state;
    return (
      <div>
        <TitleSearchSection
          pageTitle={pageTitle}
          slogan={slogan}
          content={content}
          searchQuery={searchQuery}
          onSearchChange={this.handleSearchChange}
          onSearchSubmit={this.handleSearchSubmit}
        />

        <ResearchAll 
          dataCat={dataCatSitesCompetition} 
          dataId={idSitesCompetition} 
          dataName={dataNameSitesCompetition}
          dataAddress={dataAddressSitesCompetition}
          tableData1={tableData1}
          tableData2={tableData2}
          query={searchQuery}
        />

        <ResearchAll 
          dataCat={dataCatOlympiade} 
          dataId={idOlympiade} 
          dataName={dataNameOlympiade}
          dataAddress={dataAddressOlympiade}
          tableData1={tableData1}
          tableData2={tableData2}
          query={searchQuery}
        />

        <ResearchAll 
          dataCat={dataCatBoutiques} 
          dataId={idBoutiques} 
          dataName={dataNameBoutiques}
          dataAddress={dataAddressBoutiques}
          tableData1={tableData1}
          tableData2={tableData2}
          query={searchQuery}
        />

        <ResearchAll 
          dataCat={dataCatCentresPreparation} 
          dataId={idCentresPreparation} 
          dataName={dataNameCentresPreparation}
          dataAddress={dataAddressCentresPreparation}
          tableData1={tableData1}
          tableData2={tableData2}
          query={searchQuery}
        />

        <ResearchAll 
          dataCat={dataCatVolontaires} 
          dataId={idVolontaires} 
          dataName={dataNameVolontaires}
          dataAddress={dataAddressVolontaires}
          tableData1={tableData1}
          tableData2={tableData2}
          query={searchQuery}
        />

        <ResearchAll 
          dataCat={dataCatParkings} 
          dataId={idParkings} 
          dataName={dataNameParkings}
          dataAddress={dataAddressParkings}
          tableData1={tableData1}
          tableData2={tableData2}
          query={searchQuery}
        />

        <div class="content">
          <div class="cards-section">
            <div class="card-container">
              <Link to="/sites-de-competition">
                <img src={imgSitesCompetition} />
                <h4>Sites de compétition</h4>
                <p>Description</p>
              </Link>
            </div>

            <div class="card-container">
              <Link to="/olympiade-culturelle">
                <img src={imgOlympiade} />
                <h4>Olympiade Culturelle</h4>
                <p>Description</p>
              </Link>
            </div>

            <div class="card-container">
              <Link to="/boutiques-officielles">
                <img src={imgBoutiques} />
                <h4>Boutiques Officielles</h4>
                <p>Description</p>
              </Link>
            </div>

            <div class="card-container">
              <Link to="/centres-de-preparation">
                <img src={imgCentres} />
                <h4>Centres de préparation</h4>
                <p>Description</p>
              </Link>
            </div>

            <div class="card-container">
              <Link to="/carte-aide-volontaires">
                <img src={imgVolontaire} />
                <h4>Carte d'aide pour les Volontaires</h4>
                <p>Description</p>
              </Link>
            </div>

            <div class="card-container">
              <Link to="/parkings-velo">
                <img src={imgParking} />
                <h4>Parkings vélo</h4>
                <p>Description</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionAccueil;
