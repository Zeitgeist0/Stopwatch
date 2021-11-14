import "./buttons.scss";

export default function Buttons({ start, stop, wait, reset }) {
  return (
    <div className="buttons-container">
      <button className="stopwatch-button" onClick={start}>
        Start
      </button>
      <button className="stopwatch-button" onClick={stop}>
        Stop
      </button>
      <button className="stopwatch-button" onClick={wait}>
        Wait
      </button>
      <button className="stopwatch-button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
