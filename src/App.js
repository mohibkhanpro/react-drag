import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Draggable from "react-draggable";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [divValue, setDivValue] = useState("");

  const changeValue = () => {
    setDivValue(inputValue);
    setInputValue("");
  };

  return (
    <>
      <div className="App">
        <div className="mainDiv">
          <Draggable bounds=".mainDiv">
            <div className="dragableDiv">{divValue}</div>
          </Draggable>
        </div>
        <div
          style={{
            border: "1px solid black",
            width: "fit-content",
            height: "200px",
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={changeValue}>Add</button>
        </div>
      </div>
    </>
  );
}

export default App;
