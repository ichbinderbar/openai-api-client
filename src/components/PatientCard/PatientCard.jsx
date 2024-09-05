import "./PatientCard.scss";

export default function PatientCard({ patient }) {
  console.log(patient.diagnosis);
  return (
    <div className="patientcard__main-container">
      <div className="patientcard__subcontainer-1">
        <img className="patientcard__img" src={patient.image}></img>
      </div>
      <div className="patientcard__subcontainer-2">
        <div className="patientcard__name">
          Name:
          <div className="patientcard__data">{patient.name}</div>
        </div>
        <div className="patiendcard__age">
          Age:<div className="patientcard__data">{patient.age}</div>
        </div>
        <div className="patiendcard__sex">
          Sex:<div className="patientcard__data">{patient.sex}</div>
        </div>
        <div className="patientcard__height">
          Height:<div className="patientcard__data">{patient.height}</div>
        </div>
        <div className="patientcard__weight">
          Weight:<div className="patientcard__data">{patient.weight}</div>
        </div>
        <div className="patientcard__record-start-date">
          Patient since:
          <div className="patientcard__data">
            {patient["record-start-date"]}
          </div>
        </div>
        <div className="patientcard__current-diagnosis">
          Diagnosis:
          <div className="patientcard__data">{patient.diagnosis}</div>
        </div>
      </div>
    </div>
  );
}
