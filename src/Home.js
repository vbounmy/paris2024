import React from "react";

const Home = () => {
  return (
    <div>

      <div class="title">
        <h1>Bienvenue</h1>
        <h3>Entrez un lieu et retrouvez les activités les plus proches.</h3>
      </div>
      <div class="search-bar">
        <input 
          type="text"
          placeholder="Entrez une adresse ou un lieu.."
        />
      </div>
      <div class="content">
        <p>
          Vous trouverez toutes les informations facilitant vos déplacements afin
          de profiter pleinement des Jeux.
        </p>
      </div>

    </div>
  );
};

export default Home;
