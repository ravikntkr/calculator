import React from "react";
import { useState } from "react";

const App = () => {
  let [value, setValue] = useState("");

  // Clear function
  const clear = () => {
    setValue("");
  };

  // Backspace
  const backspace = () => {
    setValue(value.slice(0, -1));
  };

  // Button click
  const handleclick = (e) => {
    setValue(value.concat(e.target.name));
  };

  // Total
  const equal = () => {
    try {
      setValue(eval(value).toString());
    } catch (error) {
      setValue("");
    }
  };

  // Percentage FIXME:

  const percentage = () => {
    try {
      setValue((eval(value) / 100).toString());
    } catch (error) {
      setValue("");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="main-area">
          <input
            type="text"
            id="message"
            name="message"
            value={value}
            placeholder="0"
          />
          <div className="button-area">
            <table>
              <tr>
                <td>
                  <button className="btn gray" name="clear" onClick={clear}>
                    C
                  </button>
                </td>
                <td>
                  <button
                    className="btn gray"
                    name="backspace"
                    onClick={backspace}
                  >
                    <i className="fa-solid fa-delete-left"></i>
                  </button>
                </td>
                <td>
                  <button className="btn gray" name="%" onClick={percentage}>
                    %
                  </button>
                </td>
                <td>
                  <button className="btn orange" name="/" onClick={handleclick}>
                    &divide;
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn black" name="7" onClick={handleclick}>
                    7
                  </button>
                </td>
                <td>
                  <button className="btn black" name="8" onClick={handleclick}>
                    8
                  </button>
                </td>
                <td>
                  <button className="btn black" name="9" onClick={handleclick}>
                    9
                  </button>
                </td>
                <td>
                  <button className="btn orange" name="*" onClick={handleclick}>
                    &times;
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn black" name="4" onClick={handleclick}>
                    4
                  </button>
                </td>
                <td>
                  <button className="btn black" name="5" onClick={handleclick}>
                    5
                  </button>
                </td>
                <td>
                  <button className="btn black" name="6" onClick={handleclick}>
                    6
                  </button>
                </td>
                <td>
                  <button className="btn orange" name="-" onClick={handleclick}>
                    -
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn black" name="1" onClick={handleclick}>
                    1
                  </button>
                </td>
                <td>
                  <button className="btn black" name="2" onClick={handleclick}>
                    2
                  </button>
                </td>
                <td>
                  <button className="btn black" name="3" onClick={handleclick}>
                    3
                  </button>
                </td>
                <td>
                  <button className="btn orange" name="+" onClick={handleclick}>
                    +
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button
                    className="btn black zero"
                    name="0"
                    onClick={handleclick}
                  >
                    0
                  </button>
                </td>
                <td>
                  <button className="btn black" name="." onClick={handleclick}>
                    .
                  </button>
                </td>
                <td>
                  <button className="btn orange" name="=" onClick={equal}>
                    =
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <p className="author">Made by Ravikant K.</p>
      </div>
    </div>
  );
};

export default App;
