import "./App.css";
import React, { useState, useEffect } from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import TimeDisplay from "./Components/TimeDisplay/TimeDisplay.jsx";
import Buttons from "./Components/Buttons/Buttons.jsx";
function App() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    const subject = new Subject();
    interval(1000)
      .pipe(takeUntil(subject))
      .subscribe(() => {
        if (timerOn) {
          setTime((val) => val + 1);
        }
      });
    return () => {
      subject.next();
      subject.complete();
    };
  }, [timerOn]);

  const handleStart = () => {
    setTimerOn(true);
  };

  const handleStop = () => {
    setTime(0);
    setTimerOn(false);
  };

  const handleWait = function () {
    let clicks = 0;
    let timeout = "";
    if (timerOn === false) {
      return;
    }
    return function () {
      clicks++;

      if (clicks === 1) {
        timeout = setTimeout(function () {
          setTimerOn(true);
          clicks = 0;
        }, 300);
      } else {
        clearTimeout(timeout);
        setTimerOn(false);
        clicks = 0;
      }
    };
  };

  const handleReset = () => {
    setTime(0);
    setTimerOn(true);
  };

  return (
    <>
      <div className="container">
        <div className="stopwatch-container">
          <h1 className="stopwatch-header">Stopwatch</h1>
          <TimeDisplay time={time} />
          <Buttons
            start={handleStart}
            stop={handleStop}
            wait={handleWait()}
            reset={handleReset}
          />
        </div>
      </div>
    </>
  );
}

export default App;
