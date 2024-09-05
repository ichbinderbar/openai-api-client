import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import PatientCard from "./components/PatientCard/PatientCard";
import patients from "./data/patients.json";

const apiUrl = "https://openai-experimental-server-eff701d4fdb7.herokuapp.com/";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const patient = patients[2];

  useEffect(() => {
    setPrompt(`Give me a list of symptoms for ${patient.diagnosis}`);
  }, []);

  const getResponse = async () => {
    try {
      const result = await axios.post(
        "https://openai-experimental-server-eff701d4fdb7.herokuapp.com/api/get-response",
        { prompt }
      );
      setResponse(result.data.choices[0].message.content);
    } catch (error) {
      console.error(
        "Error fetching response:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div>
      <PatientCard patient={patient}></PatientCard>
      {/* <input
        type="text"
        value={prompt}
        onChange={handleInputChange}
        placeholder="Enter your prompt here"
      /> */}
      <button onClick={getResponse}>Get list of symptoms</button>
      <div>{response}</div>
    </div>
  );
}

export default App;
