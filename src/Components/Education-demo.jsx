import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function EducationDemo({
  isActive,
  handleActiveIdChange,
  className,
  educationData,
  handleChange,
}) {
  const [isExpanded, setIsExpanded] = useState(new Set());
  function handleExpand(index) {
    const tempSet = new Set(isExpanded);
    if (isExpanded.has(index)) {
      tempSet.delete(index);
    } else {
      tempSet.add(index);
    }
    setIsExpanded(tempSet);
  }
  console.log(isExpanded)
  return (
    <div className={className}>
      <div className="form-heading">
        <FontAwesomeIcon icon={faGraduationCap} />
        <h3 onClick={() => handleActiveIdChange(1)}>Education Details</h3>
      </div>
      {isActive && (
        <>
          <div className="educationDataSet">
            {educationData.map((data, index) => (
              <div key={data.id} onClick={() => handleExpand(data.id)}>
                <div className="break"></div>
                <div >
                  {" "}
                  {data.titleOfStudy}{" "}
                </div>
                {isExpanded.has(data.id) && (
                  <form action="">
                    <div className="input-group">
                      <label htmlFor="schoolName">School name</label>
                      <input
                        name="schoolName"
                        type="text"
                        id="schoolName"
                        onChange={handleChange}
                        value={data.schoolName || ""}
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="TitleOfStudy">Title of study</label>
                      <input
                        name="titleOfStudy"
                        type="text"
                        id="titleOfStudy"
                        onChange={handleChange}
                        value={data.titleOfStudy || ""}
                      />
                    </div>
                    <div className="duration">
                      <div className="input-group">
                        <label htmlFor="startDate">Start date</label>
                        <input
                          name="startDate"
                          type="text"
                          id="startDate"
                          onChange={handleChange}
                          value={data.startDate || ""}
                        />
                      </div>
                      <div className="input-group">
                        <label htmlFor="endDate">End date</label>
                        <input
                          name="endDate"
                          type="text"
                          id="endDate"
                          onChange={handleChange}
                          value={data.endDate || ""}
                        />
                      </div>
                    </div>
                    <div className="input-group">
                      <label htmlFor="location">Location</label>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        onChange={handleChange}
                        value={data.location || ""}
                      />
                    </div>
                    <div className="button-group">
                      <button className="btn btn btn-outline-danger delete-button">
                        <FontAwesomeIcon icon={faTrash} />
                        &nbsp; delete
                      </button>
                      <div className="main-buttons">
                        <button className="btn btn-outline-secondary cancel-button">
                          Cancel
                        </button>
                        <button
                          className="btn btn-primary submit-button"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
