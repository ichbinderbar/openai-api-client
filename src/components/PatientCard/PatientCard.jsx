import "./PatientCard.scss";
import patients from "../../data/patients.json";

export default function PatientCard() {
  console.log(patients);

  return (
    <article className="patient">
      <div className="patient__details">
        <div className="patient__image-container">
          <img className="patient__image" src={patients[0].image}></img>
        </div>
        <div className="patient__info-container">
          <label className="patient__info-label">
            Name:
            <span className="patient__info-data"> {patients[0].name}</span>
          </label>
          <label className="patient__info-label">
            Age:
            <span className="patient__info-data"> {patients[0].age}</span>
          </label>
          <label className="patient__info-label">
            Sex:
            <span className="patient__info-data"> {patients[0].sex}</span>
          </label>
          <label className="patient__info-label">
            Height:
            <span className="patient__info-data"> {patients[0].height}</span>
          </label>
          <label className="patient__info-label">
            Weight:
            <span className="patient__info-data"> {patients[0].weight}</span>
          </label>
          <label className="patient__info-label">
            Patient since:
            <span className="patient__info-data">
              {" "}
              {patients[0]["record-start-date"]}
            </span>
          </label>
          <label className="patient__info-label">
            Diagnosis:
            <span className="patient__info-data"> {patients[0].diagnosis}</span>
          </label>
        </div>
      </div>
      <button className="patient__cta">Get Patient Symptoms</button>
    </article>
  );
}
