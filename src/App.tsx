import React from "react";
import Todos from "./components/Todos";

function App() {
  const items = [
    "learn react",
    "learn typeScriPt",
    "learn Next.js",
    "learn DSA",
  ];
  return (
    <div className="App">
      <Todos items={items} />
    </div>
  );
}

export default App;
