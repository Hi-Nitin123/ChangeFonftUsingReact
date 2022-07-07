import React, { useState } from "react";

import "../css/FontChanger.css";
import Bold from "./Bold";
import General from "./General";
import Italic from "./Italic";

function FontChanger() {
  const [general, setGeneral] = useState(true);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  console.log(italic);

  const makeItBold = () => {
    setBold(true);
    setItalic(false);
    setGeneral(false);
  };

  const makeItItalic = () => {
    setBold(false);
    setItalic(true);
    setGeneral(false);
  };

  const makeItGeneral = () => {
    setBold(false);
    setItalic(false);
    setGeneral(true);
  };

  return (
    <div>
      {general ? <General /> : bold ? <Bold /> : <Italic />}

      <button id="btn1" onClick={makeItBold}>
        Bold
      </button>
      <button id="btn2" onClick={makeItItalic}>
        Italic
      </button>
      <button id="btn3" onClick={makeItGeneral}>
        General
      </button>
    </div>
  );
}

export default FontChanger;
