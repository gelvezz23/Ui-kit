import React from "react";
import Highlight from "react-highlight";
import "./../../assets/styles/theme-codebox.scss";
const CodeBox = ({ children }) => {
  return (
    <section className="content-code">
      <Highlight languages={["html"]} className="lenguaje-html">
        {children}
      </Highlight>
    </section>
  );
};

export default CodeBox;
