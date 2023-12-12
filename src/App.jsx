import { useState } from "react";
import ManageTemplate from "./Components/ManageTemplate";
import General from "./Components/General";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import "./style.css";
import DisplayEducation from "./Components/DisplayEducation";
import DisplayGeneral from "./Components/DisplayGeneral";
import DisplayExperience from "./Components/DisplayExperience";
import defaultData from "./data,js";

const defaultDisplayManager = {
  displayGeneral: true,
  displayEducation: true,
  displayExperience: true,
};

function App() {
  const [generalData, setGeneralData] = useState(defaultData.general);
  function handleGeneralDataChange(e) {
    setGeneralData({ ...generalData, [e.target.name]: e.target.value });
    setDisplayManager({ ...displayManager, displayGeneral: true });
  }
  const [educationData, setEducationData] = useState(defaultData.education);
  function handleEducationDataChange(e) {
    setEducationData({ ...educationData, [e.target.name]: e.target.value });
    setDisplayManager({ ...displayManager, displayEducation: true });
  }
  const [experienceData, setExperienceData] = useState(defaultData.experience);
  function handleExperienceDataChange(e) {
    setExperienceData({ ...experienceData, [e.target.name]: e.target.value });
    setDisplayManager({ ...displayManager, displayExperience: true });
  }
  const [activeId, setActiveId] = useState("");
  function handleActiveIdChange(id) {
    setActiveId(id);
  }
  function clearForm() {
    setGeneralData({});
    setEducationData({});
    setExperienceData({});
    setDisplayManager({
      displayGeneral: false,
      displayEducation: false,
      displayExperience: false,
    });
  }
  function resetForm() {
    setGeneralData(defaultData.general);
    setEducationData(defaultData.education);
    setExperienceData(defaultData.experience);
    setDisplayManager(defaultDisplayManager);
  }
  console.log(educationData.dateOfStudy);
  console.log(typeof educationData.dateOfStudy);
  const [displayManager, setDisplayManager] = useState(defaultDisplayManager);
  return (
    <div className="app">
      <div className="form-container">
        <ManageTemplate clearForm={clearForm} resetForm={resetForm} />
        <General
          isActive={activeId === 0}
          handleActiveIdChange={handleActiveIdChange}
          className="general form-component"
          generalData={generalData}
          handleChange={handleGeneralDataChange}
        ></General>
        <Education
          isActive={activeId === 1}
          handleActiveIdChange={handleActiveIdChange}
          className="education form-component"
          educationData={educationData}
          handleChange={handleEducationDataChange}
        ></Education>
        <Experience
          isActive={activeId === 2}
          handleActiveIdChange={handleActiveIdChange}
          className="experience form-component"
          experienceData={experienceData}
          handleChange={handleExperienceDataChange}
        ></Experience>
      </div>
      <div className="resume-container">
        {displayManager.displayGeneral && (
          <DisplayGeneral generalData={generalData} />
        )}
        {displayManager.displayEducation && (
          <DisplayEducation educationData={educationData}></DisplayEducation>
        )}
        {displayManager.displayExperience && (
          <DisplayExperience
            experienceData={experienceData}
          ></DisplayExperience>
        )}
      </div>
    </div>
  );
}

export default App;
