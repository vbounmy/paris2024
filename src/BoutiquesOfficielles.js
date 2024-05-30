import React, { useEffect, useState } from "react";
import axios from "axios";

const BoutiquesOfficielles = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query) {
      setLoading(true);
      const fetchData = async () => {
        try {
          console.log("Fetching data for query:", query);
          const response = await axios.get(
            `https://data.paris2024.org/api/records/1.0/search/?dataset=boutiques-officielles&q=${query}`
          );
          console.log("API response:", response.data);
          setData(response.data.records);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <h1>Boutiques Officielles</h1>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Entrez une adresse ou un lieu"
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data.length > 0 ? (
            data.map((item) => (
              <li key={item.recordid}>
                {item.fields.nom} - {item.fields.adresse}
              </li>
            ))
          ) : (
            <li>Aucune donnée trouvée</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default BoutiquesOfficielles;
