import "./timedisplay.scss";

export default function TimeDisplay({ time }) {
  return (
    <div className="time-container">
      <span className="time-display">
        {("0" + Math.floor((time / (60 * 60)) % 24)).slice(-2)}
      </span>
      &nbsp;:&nbsp;
      <span className="time-display">
        {("0" + (Math.floor(time / 60) % 60)).slice(-2)}
      </span>
      &nbsp;:&nbsp;
      <span className="time-display">
        {("0" + Math.floor(time % 60)).slice(-2)}
      </span>
    </div>
  );
}
