import Button from "../Button/Button";
import "./PatientCard.scss";

export default function PatientCard({ patient, getResponse }) {
  // console.log(patient.diagnosis);

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <article className="patient">
      <div className="patient__details">
        <div className="patient__image-container">
          <img className="patient__image" src={patient.image}></img>
        </div>
        <div className="patient__info-container">
          <label className="patient__info-label">
            Name:
            <span className="patient__info-data"> {patient.name}</span>
          </label>
          <label className="patient__info-label">
            Age:
            <span className="patient__info-data"> {patient.age}</span>
          </label>
          <label className="patient__info-label">
            Sex:
            <span className="patient__info-data"> {patient.sex}</span>
          </label>
          <label className="patient__info-label">
            Height:
            <span className="patient__info-data"> {patient.height}</span>
          </label>
          <label className="patient__info-label">
            Weight:
            <span className="patient__info-data"> {patient.weight}</span>
          </label>
          <label className="patient__info-label">
            Patient since:
            <span className="patient__info-data">
              {" "}
              {patient["record-start-date"]}
            </span>
          </label>
          <label className="patient__info-label">
            Diagnosis:
            <span className="patient__info-data"> {patient.diagnosis}</span>
          </label>
        </div>
      </div>
      <Button getResponse={getResponse} />
    </article>
  );
}
