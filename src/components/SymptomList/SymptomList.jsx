import "./SymptomList.scss";

export default function SymptomList({ symptoms }) {
  return (
    <section>
      <h2>Symptoms</h2>
      {symptoms.map((symptom) => {
        <input type="checkbox">{symptom}</input>;
      })}
    </section>
  );
}
