import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Counter</h1>

      <div className="count">{count}</div>
      <div className="buttons">
        <button
          onClick={() => {
            if (count === 0) {
              setCount(0);
            } else {
              setCount(count - 1);
            }
          }}
        >
          Decrement
        </button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(0)}>Erase</button>
      </div>
    </div>
  );
}

export default App;
