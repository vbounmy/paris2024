import React, { Component } from "react";

const TitleSearchSection = (props) => {
    return (
        <div>
            <div class="title">
                <h1>{props.title}</h1>
                <h3>{props.slogan}</h3>
            </div>
            <div class="search-bar">
                <input 
                type="text"
                placeholder="Entrez une adresse ou un lieu.."
                value={props.searchQuery}
                onChange={props.onSearchChange}
                />
                <div class="button-arrow">
                    <button onClick={props.onSearchSubmit}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 34 27" width="13" fill="white"><path d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z" data-name="3-Arrow Right"/></svg>
                    </button>
                </div>
            </div>
            <div class="content">
                <p>{props.content}</p>
            </div>
        </div>
    )
}

class SectionRecherche extends Component {
    state = {
        data: [],
        searchQuery: '',
    };

    fetchData = (query = '') => {
        const { dataId } = this.props;
        let url = `https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-${dataId}/records?limit=100`;
        if (query) {
            url += `&q=${query}`;
        }
        console.log('Fetching data from:', url);
        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                console.log('API response:', result);
                if (result.results && Array.isArray(result.results)) {
                    const data = result.results.map(record => ({ 
                        title: record.title,
                        address: record.address,
                    }));
                    this.setState({
                        data: data,
                    }, () => {
                        console.log('Updated state with data:', this.state.data); 
                    });
                } else {
                    console.error("Les données de l'API ne sont pas au format attendu:", result);
                    this.setState({ data: [] });
                }
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des données de l'API:", error);
                this.setState({ data: [] });
            });
    }

    componentDidMount() {
        this.fetchData();
    }

    handleSearchChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    }

    handleSearchSubmit = () => {
        this.fetchData(this.state.searchQuery);
    }

    render() {
        const { title, slogan, content, dataId } = this.props;
        const { data, searchQuery } = this.state;
        return (
            <div>
                <TitleSearchSection 
                title={title} 
                slogan={slogan} 
                content={content}
                dataId = {dataId}
                searchQuery={searchQuery}
                onSearchChange={this.handleSearchChange}
                onSearchSubmit={this.handleSearchSubmit}
                />

                <div class="content">
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Adresse</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.title}</td>
                                        <td>{item.address}</td>
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
            </div>
        );
    }
}

export default SectionRecherche;