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
                />
            </div>
            <div class="content">
                <p>{props.content}</p>
            </div>
        </div>
    )
}

class SectionRecherche extends Component {
    render() {
        const { title, slogan, content } = this.props;
        return (
            <TitleSearchSection 
            title={title} 
            slogan={slogan} 
            content={content}
            />
        );
    }
}

export default SectionRecherche;