import React, { useState } from "react";
import axios from "axios";
import "./App.scss";
import patients from "./data/patients.json";
import PatientCard from "./components/PatientCard/PatientCard";
import Header from "./components/Header/Header";

const apiUrl = "https://openai-experimental-server-eff701d4fdb7.herokuapp.com/";

function App() {
  // const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const prompt = `Give me a list of symptoms for `;

  const getResponse = async () => {
    setPrompt("Give me a list of symptoms for Pancreatic Cancer");
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
      <Header />
      <PatientCard></PatientCard>
      {/* <input
        type="text"
        value={prompt}
        onChange={handleInputChange}
        placeholder="Enter your prompt here"
      /> */}
      <button onClick={getResponse}>Get Response</button>
      <div>{response}</div>
    </div>
  );
}

export default App;
