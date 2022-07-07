import "./App.css";
import FontChanger from "./Components/FontChanger";
import React, { useState } from "react";

export const Data = React.createContext();

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <Data.Provider value={[input, setInput]}>
        <FontChanger />
      </Data.Provider>
    </div>
  );
}

export default App;
