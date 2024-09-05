import "./SymptomList.scss";

export default function SymptomList({ symptoms, handleSymtomsList }) {
  const symptoms2 = ["big head", "happy", "big head", "happy"];
  console.log(symptoms2);

  const symptomHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <section className="symptoms">
      <h2 className="symptoms__header">Symptoms</h2>
      <form className="symptoms__form">
        {symptoms2.map((symptom) => (
          <label onClick={symptomHandler} className="symptoms__symptom">
            <input
              className="symptoms__checkbox"
              type="checkbox"
              value={symptom}
            />
            {symptom}
          </label>
        ))}
        <button
          className="symptoms__cta"
          onClick={(handleSymtomsList, symptomHandler)}
        >
          Get related illnesses
        </button>
      </form>
    </section>
  );
}
