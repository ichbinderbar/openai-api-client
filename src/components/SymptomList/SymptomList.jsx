import { useState, useEffect } from "react";
import "./SymptomList.scss";
import axios from "axios";

export default function SymptomList({ symptoms }) {
  const [newDesease, setNewDeasease] = useState("");
  const [secondPrompt, setSecondPrompt] = useState("");

  useEffect(() => {
    setSecondPrompt("");
  }, []);

  const getResponse = async (prompt) => {
    if (!prompt) {
      console.error("The query is empty or undefined.");
      return;
    }

    console.log("Sending query to API:", prompt);

    try {
      const result = await axios.post(
        "https://openai-experimental-server-eff701d4fdb7.herokuapp.com/api/get-response",
        { prompt }
      );
      console.log("API response received:", result.data);
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
    const inputs = e.target.querySelectorAll("input:checked");

    let str = "";

    inputs.forEach((input) => {
      console.log("Checked symptom:", input.value);
      str += ` ${input.value}`;
    });

    if (str.trim() === "") {
      console.error("No symptoms selected.");
      return;
    }

    const query = `Give me a list of related diseases based off these symptoms: ${str.trim()}`;

    console.log("Generated query:", query);

    getResponse(query);
  };

  return (
    <section className="symptoms">
      <form className="symptoms__form" onSubmit={submitHandler}>
        {symptoms.length > 0 ? (
          symptoms.map((symptom) => (
            <label key={symptom} className="symptoms__symptom">
              <input
                className="symptoms__checkbox"
                type="checkbox"
                value={symptom}
                name={`input_${symptom}`}
              />
              {symptom}
            </label>
          ))
        ) : (
          <p>No symptoms available to display.</p>
        )}
        <button className="symptoms__cta" type="submit">
          Get related illnesses
        </button>
      </form>
      <div>{newDesease}</div>
    </section>
  );
}
