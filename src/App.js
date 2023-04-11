import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0 });

  useEffect(() => {
    return () => clearInterval(id.current);
  }, []);

  let id = useRef();

  function handleTime() {
    id.current = setInterval(() => {
      setTime((prev) => {
        if (prev.sec == 60) {
          return { ...prev, min: prev.min + 1, sec: 0 };
        }
        if (prev.min == 60) {
          return { ...prev, hr: prev.hr + 1, min: 0, sec: 0 };
        }
        let newState = { ...prev, sec: prev.sec + 1 };
        return newState;
      });
      // console.log(time);
    }, 100);
  }

  return (
    <div className="App">
      <h1>Stop Watch</h1>
      <h1>
        {time.hr.toLocaleString("en-us", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
        :
        {time.min.toLocaleString("en-us", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
        :
        {time.sec.toLocaleString("en-us", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </h1>
      <button onClick={() => handleTime()}>Start</button>
      <button onClick={() => clearInterval(id.current)}>Pause</button>
      <button
        onClick={() => {
          clearInterval(id.current);
          setTime(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
