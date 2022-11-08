import React from "react";
import TittleOne from "./components/TittleOne";
function Typography() {
  return (
    <>
      <section className="row">
        <TittleOne />

        <div className="bd-example col m6 s12 x4 m4 l4">
          <p className="lead">
            Titulo con class="h#" son etiquetas <mark>{"<div>"}</mark>
          </p>
          <div className="h1">Titulo H1</div>
          <div className="h2">Titulo H2</div>
          <div className="h3">Titulo H3</div>
          <div className="h4">Titulo H4</div>
          <div className="h5">Titulo H5</div>
          <div className="h6">Titulo H6</div>
        </div>
      </section>
      <section className="row">
        <div className="bd-example">
          <h1 className="display-1">Display 1</h1>
          <h2 className="display-2">Display 2</h2>
          <h3 className="display-3">Display 3</h3>
          <h4 className="display-4">Display 4</h4>
          <h5 className="display-5">Display 5</h5>
          <h6 className="display-6">Display 6</h6>
        </div>
      </section>

      <div className="bd-example">
        <p className="lead">
          esto es un parrafo principal. Se destaca de los parrafos normales
        </p>

        <p>
          Puedes usar <mark>{"<mark>"} o .mark</mark> para resaltar texto.
        </p>

        <p>
          Puedes usar <del>{"<del>"} o .del</del> para rayar o tachar texto.
          Este texto debe tratar se como eliminado
        </p>

        <p>
          Puedes usar <u>{"<u> o <ins>"}</u> para subrayar un texto
        </p>

        <p>
          Puedes usar{" "}
          <small>{"<small> o .small"} para poner letra mas chica</small> a tus
          textos
        </p>

        <p>
          Puedes usar{" "}
          <strong>
            {"<strong> o .strong"} para poner letra mas pronunciada
          </strong>{" "}
          a tus textos
        </p>
      </div>
    </>
  );
}

export default Typography;
