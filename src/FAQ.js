import React, { Component } from "react";
import SectionQR from "./SectionQR.js";

class FAQ extends Component {
  render () {
    const pageTitle = "FAQ";
    const slogan = "Recherchez une question dans notre FAQ.";
    const dataId = "paris-2024-faq";
    const dataType1 = "label";
    const dataType2 = "body";
    const dataType3 = "url";
    const tableData1 = "Question";
    const tableData2 = "Réponse";
    const tableData3 = "URL (pour plus d'informations)";
    return (
      <div>
        <SectionQR 
          pageTitle={pageTitle}
          slogan={slogan}
          dataId={dataId}
          dataType1={dataType1}
          dataType2={dataType2}
          dataType3={dataType3}
          tableData1={tableData1}
          tableData2={tableData2}
          tableData3={tableData3}
        />
      </div>
    );
  };
};

export default FAQ;