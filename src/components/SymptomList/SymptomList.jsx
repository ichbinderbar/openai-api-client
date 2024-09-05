import { useState, useEffect } from "react";
import "./SymptomList.scss";
import axios from "axios";

export default function SymptomList({ symptoms, handleSymtomsList }) {
  const [newDesease, setNewDeasease] = useState("");
  const [secondPrompt, setSecondPrompt] = useState("");

  useEffect(() => {
    setSecondPrompt();
  }, []);

  console.log("array in component to map", symptoms);
  if (!symptoms) {
    return <div>Loading...</div>;
  }

  const getResponse = async (val) => {
    try {
      const result = await axios.post(
        "https://openai-experimental-server-eff701d4fdb7.herokuapp.com/api/get-response",
        { val }
      );
      setNewDeasease(result.data.choices[0].message.content);
    } catch (error) {
      console.error(
        "Error fetching response:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const inputs = e.target.querySelectorAll("input");

    let str = "";

    inputs.forEach((input) => {
      str += input.value;
    });

    console.log(str);

    const query =
      "Give me a list of related deaseases based off these symptoms" + str;

    console.log(query);

    getResponse(query);
  };

  return (
    <section className="symptoms">
      <h2 className="symptoms__header">Symptoms</h2>
      <form className="symptoms__form" onSubmit={submitHandler}>
        {symptoms.map((symptom) => (
          <label className="symptoms__symptom">
            <input
              className="symptoms__checkbox"
              type="checkbox"
              value={symptom}
              name={`input_${symptom}`}
            />
            {symptom}
          </label>
        ))}
        <button className="symptoms__cta" onClick={handleSymtomsList}>
          Get related illnesses
        </button>
      </form>
      <div className="">{newDesease}</div>
    </section>
  );
}
