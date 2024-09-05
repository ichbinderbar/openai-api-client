import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import PatientCard from "./components/PatientCard/PatientCard";
import patients from "./data/patients.json";

const apiUrl = "https://openai-experimental-server-eff701d4fdb7.herokuapp.com/";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [currentPatientId, setCurrentPatientId] = useState(0);
  const [symptoms, setSymtoms] = useState([]);

  const patient = patients[currentPatientId];

  const handleSymtomsList = () => {
    setSymtoms(response.split(","));
    console.log(symptoms);
  };

  useEffect(() => {
    setPrompt(
      `Give me a list of symptoms for ${patient.diagnosis} as a list separated by commas. Do not capitalize anything. Do not say anything else.`
    );
  }, [currentPatientId]);

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

  const handleInputChange = (event) => {
    const idNum = event.target.value;
    const patientFound = patients.find((patient) => patient.id === idNum);
    if (idNum === "") {
      return;
    }
    if (patientFound) {
      setCurrentPatientId(idNum);
    } else {
      console.log("ID does not match any patient.");
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Enter patient ID"
      />
      <PatientCard patient={patient}></PatientCard>
      <button onClick={getResponse}>Get list of symptoms</button>
      <div>{response}</div>
      <button onClick={handleSymtomsList}>Get related illnesses</button>
    </div>
  );
}

export default App;
