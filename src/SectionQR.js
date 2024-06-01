import React, { Component } from "react";

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
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 34 27" width="13" fill="white"><path d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z" data-name="3-Arrow Right"/></svg>
                    </button>
                </div>
            </div>
            {/* <div class="content">
                <p>{props.content}</p>
            </div> */}
        </div>
    )
}

class SectionQR extends Component {
    state = {
        data: [],
        searchQuery: '',
    };

    fetchData = (query = '') => {
        const { dataId, dataType1, dataType2, dataType3 } = this.props;
        let url = `https://data.paris2024.org/api/explore/v2.1/catalog/datasets/${dataId}/records?limit=100`;
        if (query && dataType3) {
            url = `https://data.paris2024.org/api/explore/v2.1/catalog/datasets/${dataId}/records?select=${dataType1}%2C${dataType2}%2C${dataType3}&where=%22${query}%22&limit=100`;
        } 
        else if (query) {
            url = `https://data.paris2024.org/api/explore/v2.1/catalog/datasets/${dataId}/records?select=${dataType1}%2C${dataType2}&where=%22${query}%22&limit=100`;
        }
        console.log('Fetching data from:', url);
        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                console.log('API response:', result);
                if (result.results && Array.isArray(result.results)) {
                    const data = result.results.map(record => ({ 
                        [dataType1]: record[dataType1],
                        [dataType2]: record[dataType2],
                        [dataType3]: record[dataType3],
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
        const { pageTitle, slogan, content, dataId, dataType1, dataType2, dataType3, tableData1, tableData2, tableData3 } = this.props;
        const { data, searchQuery } = this.state;
        return (
            <div>
                <TitleSearchSection 
                pageTitle={pageTitle} 
                slogan={slogan} 
                content={content}
                dataId = {dataId}
                dataType1 = {dataType1}
                dataType2 = {dataType2}
                dataType3 = {dataType3}
                searchQuery={searchQuery}
                onSearchChange={this.handleSearchChange}
                onSearchSubmit={this.handleSearchSubmit}
                />

                <div class="content">
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <div class="faq-question" key={index}>
                                <h3>{item[this.props.dataType1]}</h3>
                                <p>{item[this.props.dataType2]}</p>
                                <h4>Pour plus d'informations :</h4>
                                <p>{item[this.props.dataType3]}</p>
                            </div>
                        ))
                    ) : (
                        <p>Aucune donnée trouvée.</p>
                    )}
                </div>
            </div>
        );
    }
}

export default SectionQR;