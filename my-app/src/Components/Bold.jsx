import React, { useContext } from "react";
import { Data } from "../App";

function Bold() {
  const [input, setInput] = useContext(Data);
  console.log("show", input);

  return (
    <div>
      <label>
        <textarea
          name="bold"
          rows="10"
          columns="1000"
          value={input}
          style={{
            fontWeight: "bold",
            resize: "none",
            height: 208,
            width: 953,
            backgroundColor: "black",
            color: "white",
            fontSize: 20,
            border: "15px solid green",
          }}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></textarea>
      </label>
    </div>
  );
}

export default Bold;
