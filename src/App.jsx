import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import patients from "./data/patients.json";
import PatientCard from "./components/PatientCard/PatientCard";
import Header from "./components/Header/Header";
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
    const array = response.split(",");
    console.log("Converted string to array:", array);
    setSymtoms(array);
  }, [response]);

  const handleSymtomsList = () => {
    setSymtoms(array);
    console.log("got in here");
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
    // setResponse("blah, blah, blah");
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
      <Header />
      <div className="search-container">
        <SearchBar handleInputChange={handleInputChange} />
      </div>
      <PatientCard patient={patient} getResponse={getResponse}></PatientCard>
      {/* <button onClick={getResponse}>Get list of symptoms</button> */}
      <SymptomList symptoms={symptoms} handleSymtomsList={handleSymtomsList} />
      {/* <button onClick={handleSymtomsList}>Get related illnesses</button> */}
    </div>
  );
}

export default App;
