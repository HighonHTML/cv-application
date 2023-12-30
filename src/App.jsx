import { useState } from "react";
import "./style.css";
import defaultData from "./data,js";
import General from "./Components/General";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import EducationDemo from "./Components/Education-demo";
import ManageTemplate from "./Components/ManageTemplate";
import DisplayGeneral from "./Components/DisplayGeneral";
import DisplayEducation from "./Components/DisplayEducation";
import DisplayExperience from "./Components/DisplayExperience";

const defaultDisplayManager = {
  displayGeneral: true,
  displayEducation: true,
  displayExperience: true,
};
const defaultEducationDataArray = [
  {
    schoolName: "VIT (Vellore Institute of Technology)",
    titleOfStudy: "Mechanical Engineering",
    startDate: "2015/09/01",
    endDate: "2019/06/30",
    location: "Vellore, India",
    id: 1
  },
  {
    schoolName: "VIT (Vellore Institute of Technology)",
    titleOfStudy: "Mechanical Engineering",
    startDate: "2015/09/01",
    endDate: "2019/06/30",
    location: "Vellore, India",
    id: 2
  }
  
];

function App() {
  const [generalData, setGeneralData] = useState(defaultData.general);
  function handleGeneralDataChange(e) {
    setGeneralData({ ...generalData, [e.target.name]: e.target.value });
    setDisplayManager({ ...displayManager, displayGeneral: true });
  }
  const [educationDataArray, setEducationDataArray] = useState("");
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
  function handleEducationArrayDataChange(){

  }
  const [displayManager, setDisplayManager] = useState(defaultDisplayManager);
  return (
    <div className="app">
      <div className="form-container">
        <ManageTemplate clearForm={clearForm} resetForm={resetForm} />
        <EducationDemo
          isActive={true}
          className='education-demo form-component'
          educationData={defaultEducationDataArray}
          handleChange={handleEducationArrayDataChange}
        ></EducationDemo>
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
