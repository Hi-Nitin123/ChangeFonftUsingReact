import React from "react";

import "../css/FontChanger.css";

function FontChanger() {
  return (
    <div>
      <label htmlFor="">
        <textarea
          name=""
          id="txt"
          cols="100"
          rows="10"
          placeholder="Write something..."
        ></textarea>
        <br />
        <br />
      </label>
      <div>
        <button id="btn1">Bold</button>
        <button id="btn2">Italic</button>
        <button id="btn3">General</button>
      </div>
    </div>
  );
}

export default FontChanger;
