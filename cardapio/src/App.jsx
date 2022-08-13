import React from "react";
import { Router } from "./router/Router";
import { GlobalStyle } from "./StyledGlobal";

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Router/>
    </div>
  );
}

export default App;
