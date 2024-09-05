import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import patients from "./data/patients.json";
import PatientCard from "./components/PatientCard/PatientCard";
import SearchBar from "./components/SearchBar/SearchBar";
import SymptomList from "./components/SymptomList/SymptomList";

const apiUrl = "https://openai-experimental-server-eff701d4fdb7.herokuapp.com/";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [currentPatientId, setCurrentPatientId] = useState(0);
  const [symptoms, setSymtoms] = useState([]);

  const patient = patients[currentPatientId];

  useEffect(() => {
    if (response) {
      const array = response.split(",").filter((item) => item.trim() !== "");
      if (array.length > 0) {
        setSymtoms(array);
      } else {
        console.error("No valid symptoms received");
      }
    }
  }, [response]);

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
      <div className="search-container">
        <SearchBar handleInputChange={handleInputChange} />
      </div>
      <PatientCard patient={patient}></PatientCard>
      <button onClick={getResponse}>Get list of symptoms</button>
      <SymptomList symptoms={symptoms} />
    </div>
  );
}

export default App;
