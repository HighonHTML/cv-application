import "../stylesheets/displayExperience.css";
export default function DisplayExperience({ experienceData }) {
  return (
    <div className="experience-section">
      <h4>Experience</h4>
      <div className="experience-info">
        <div className="left">
          <p>
            {experienceData.startDate} {experienceData.endDate && "-"}{" "}
            {experienceData.endDate}
          </p>
          <p>{experienceData.location}</p>
        </div>
        <div className="right">
          <p>{experienceData.companyName}</p>
          <p>{experienceData.positionTitle} </p>
          <p>{experienceData.description} </p>
        </div>
      </div>
    </div>
  );
}
