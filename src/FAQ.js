import React, { Component } from "react";
import SectionRecherche from "./SectionRecherche.js";

class FAQ extends Component {
  render () {
    const pageTitle = "FAQ";
    const slogan = "Recherchez, posez ou répondez à des questions.";
    return (
      <div>
        <SectionRecherche 
          pageTitle={pageTitle}
          slogan={slogan}
        />
      </div>
    );
  };
};

export default FAQ;