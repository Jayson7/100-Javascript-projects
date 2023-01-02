import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Counter</h1>

      <div className="count">{count}</div>
      <div className="buttons">
        <button>Decrement</button>
        <button>Increment</button>
        <button>Erase</button>
      </div>
    </div>
  );
}

export default App;
