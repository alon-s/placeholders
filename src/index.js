import React from "react";
import ReactDOM from "react-dom";
import SideBar from "./components/sidebar/EmptySideBar";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <SideBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
