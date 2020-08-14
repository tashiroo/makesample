import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>sample</h1>
      {/* このfromないが全ての基本 */}
      <form>
        <label>
          name:<input type="text" name="name"></input>
        </label>
        <input type="submit" value="submit"></input>
        <div>
          <textarea>Hello there, this is some text in a text area</textarea>
        </div>
        <div>
          <select>
            <option value="grepefruit">Grepefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">
              Coconut
            </option>
            <option value="mango">Mango</option>
          </select>
        </div>
      </form>
    </div>
  );
}



export default App;
