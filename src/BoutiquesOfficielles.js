import React, { Component } from "react";
import SectionRecherche from "./SectionRecherche.js";

class BoutiquesOfficielles extends Component {
  render () {
    const pageTitle = "Boutiques Officielles";
    const slogan = "Entrez un lieu et retrouvez toutes les boutiques officielles à proximité.";
    const dataId = "boutiques-officielles"
    const dataType1 = "title"
    const dataType2 = "address"
    const tableData1 = "Nom"
    const tableData2 = "Adresse"
    return (
      <div>
        <SectionRecherche 
          pageTitle={pageTitle}
          slogan={slogan}
          dataId={dataId}
          dataType1={dataType1}
          dataType2={dataType2}
          tableData1={tableData1}
          tableData2={tableData2}
        />
      </div>
    );
  };
};

export default BoutiquesOfficielles;

// import React, { useEffect, useState, Component } from "react";
// import axios from "axios";

// const BoutiquesOfficielles = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     if (query) {
//       setLoading(true);
//       const fetchData = async () => {
//         try {
//           console.log("Fetching data for query:", query);
//           const response = await axios.get(
//             `https://data.paris2024.org/api/records/1.0/search/?dataset=boutiques-officielles&q=${query}`
//           );
//           console.log("API response:", response.data);
//           setData(response.data.records);
//         } catch (error) {
//           console.error("Error fetching data:", error);
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchData();
//     }
//   }, [query]);

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };

//   return (
//     <div>
//       <div class="title">
//         <h1>Boutiques Officielles</h1>
//       </div>
//       <div class="content">
//         <input
//           type="text"
//           value={query}
//           onChange={handleInputChange}
//           placeholder="Entrez une adresse ou un lieu"
//         />
//         {loading ? (
//           <div>Loading...</div>
//         ) : (
//           <ul>
//             {data.length > 0 ? (
//               data.map((item) => (
//                 <li key={item.recordid}>
//                   {item.fields.nom} - {item.fields.adresse}
//                 </li>
//               ))
//             ) : (
//               <li>Aucune donnée trouvée</li>
//             )}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BoutiquesOfficielles;