import React, { Component } from "react";
import SectionRecherche from "./SectionRecherche.js";

class FAQ extends Component {
  render () {
    const title = "FAQ";
    const slogan = "Recherchez, posez ou répondez à des questions.";
    return (
      <div>
        <SectionRecherche 
          title={title}
          slogan={slogan}
        />
      </div>
    );
  };
};

export default FAQ;