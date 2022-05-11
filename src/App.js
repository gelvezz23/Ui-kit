import "./App.scss";
import Navbar from "./components/Navbar";

import Typography from "./components/Typography";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="container">
        <Typography />

        <div className="col">
          <h1 className="display-4">barras de navegacion</h1>
          <Navbar example={true} />
        </div>
      </section>
    </>
  );
}

export default App;
