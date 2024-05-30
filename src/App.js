import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home.js";
import logoGif from "./images/emblem-white.svg";
import logo2 from "./images/Emblme Paris 2024.png";
import BoutiquesOfficielles from "./BoutiquesOfficielles.js";
import CentresPreparation from "./CentresPreparation.js";
import SitesCompetition from "./SitesCompetition.js";
import ParkingsVelo from "./ParkingsVelo.js";
import CarteAideVolontaires from "./CarteAideVolontaires.js";
import OlympiadeCulturelle from "./OlympiadeCulturelle.js";
import FAQ from "./FAQ.js";

const App = () => {

  const showSidebar = () => {
      const sidebar = document.querySelector('.sidebar');
      if (sidebar){
        sidebar.style.display = 'flex';
      }
  };

  const hideSidebar = () => {
      const sidebar = document.querySelector('.sidebar');
      if (sidebar){
        sidebar.style.display = 'none';
      }
  };

  return (
    <Router>
      <div>

        <header class="header">
          <div class="header-logo">
            <h1>PARIS 2024</h1>
            <img src={logoGif} />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/FAQ">FAQ</Link>
              </li>
              <li onClick={showSidebar} class="menu-icon-container"><Link href="#">
                <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -1000 1000 400" width="30" fill="#012333"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></Link>
              </li>
            </ul>

            <ul class="sidebar" style={{ display: 'none' }}>

              <li onClick={hideSidebar} class="sidebar-icon-container"><Link href="#"><svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -1000 1000 400" width="30" fill="white"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></Link></li>

              <li onClick={hideSidebar}>
                <Link to="/boutiques-officielles">Boutiques Officielles</Link>
              </li>
              <li onClick={hideSidebar}>
                <Link to="/centres-de-preparation">Centres de préparation</Link>
              </li>
              <li onClick={hideSidebar}>
                <Link to="/sites-de-competition">Sites de compétition</Link>
              </li>
              <li onClick={hideSidebar}>
                <Link to="/parkings-velo">Parkings vélo</Link>
              </li>
              <li onClick={hideSidebar}>
                <Link to="/carte-aide-volontaires">Carte d'aide pour les Volontaires</Link>
              </li>
              <li onClick={hideSidebar}>
                <Link to="/olympiade-culturelle">Olympiade Culturelle</Link>
              </li>

            </ul>
            
          </nav>

        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/boutiques-officielles"
              element={<BoutiquesOfficielles />}
            />
            <Route
              path="/centres-de-preparation"
              element={<CentresPreparation />}
            />
            <Route
              path="/sites-de-competition"
              element={<SitesCompetition />}
            />
            <Route
              path="/parkings-velo"
              element={<ParkingsVelo />}
            />
            <Route
              path="/carte-aide-volontaires"
              element={<CarteAideVolontaires />}
            />
            <Route
              path="/olympiade-culturelle"
              element={<OlympiadeCulturelle />}
            />
            <Route
            path="/FAQ"
            element={<FAQ />}
          />
          </Routes>
        </main>

        <footer>
          <img src={logo2}/>
          <h1>PARIS 2024</h1>
        </footer>
      </div>
    </Router>
  );
};

export default App;
