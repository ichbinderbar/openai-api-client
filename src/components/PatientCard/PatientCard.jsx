import "./PatientCard.scss";

export default function PatientCard() {
  return (
    <div className="patientcard__main-container">
      <div className="patientcard__subcontainer-1">
        <img className="patientcard__img"></img>
      </div>
      <div className="patientcard__subcontainer-2">
        <div className="patientcard__name">
          Name:
          <div className="patientcard__data"></div>
        </div>
        <div className="patiendcard__age">
          Age:<div className="patientcard__data"></div>
        </div>
        <div className="patiendcard__sex">
          Sex:<div className="patientcard__data"></div>
        </div>
        <div className="patientcard__height">
          Height:<div className="patientcard__data"></div>
        </div>
        <div className="patientcard__weight">
          Weight:<div className="patientcard__data"></div>
        </div>
        <div className="patientcard__record-start-date">
          Patient since:<div className="patientcard__data"></div>
        </div>
        <div className="patientcard__current-diagnosis">
          Diagnosis:<div className="patientcard__data"></div>
        </div>
      </div>
    </div>
  );
}
