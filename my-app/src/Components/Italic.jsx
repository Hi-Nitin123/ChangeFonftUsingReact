import React, { useContext } from "react";
import { Data } from "../App";

function Italic() {
  const [input, setInput] = useContext(Data);

  return (
    <div>
      <label>
        <textarea
          name="bold"
          rows="10"
          columns="1000"
          style={{
            fontStyle: "italic",
            resize: "none",
            height: 208,
            width: 953,
            backgroundColor: "black",
            color: "white",
            fontSize: 20,
            border: "15px solid green",
          }}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></textarea>
      </label>
    </div>
  );
}

export default Italic;
