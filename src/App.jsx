import { Fragment } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import EXAMPLES from "./components/Examples.jsx";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <EXAMPLES />
      </main>
    </Fragment>
  );
}

export default App;
