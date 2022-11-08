import React from "react";
import CodeBox from "../../CodeBox";

const TittleOne = () => {
  const titleWithOutClassType = `
  <h1>Titulo</h1>
  <h2>Titulo H2</h2>
  <h3>Titulo H3</h3>
  <h4>Titulo H4</h4>
  <h5>Titulo H5</h5>
  <h6>Titulo H6</h6>`;

  return (
    <div className="bd-example">
      <p className="lead">
        Titulo sin class="h#" son etiquetas H1,H2,H3, etc ...
      </p>
      <div className="col s12 x4 m12 l6">
        <h1>Titulo H1</h1>
        <h2>Titulo H2</h2>
        <h3>Titulo H3</h3>
        <h4>Titulo H4</h4>
        <h5>Titulo H5</h5>
        <h6>Titulo H6</h6>
      </div>
      <CodeBox>{titleWithOutClassType}</CodeBox>
    </div>
  );
};
export default TittleOne;
