import "./Button.scss";

export default function Button({ getResponse }) {
  return (
    <div>
      <button className="cta" onClick={getResponse}>
        Get Patient Symptoms
      </button>
    </div>
  );
}
