import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function Education({
  isActive,
  handleActiveIdChange,
  className,
  educationData,
  handleChange,
}) {
  function handleTitleClick(){
    isActive ? handleActiveIdChange(null) : handleActiveIdChange(1)
  }
  return (
    <div className={className}>
      <div className="form-heading">
        <FontAwesomeIcon icon={faGraduationCap} />
        <h3 onClick={handleTitleClick}>Education Details</h3>
      </div>
      {isActive ? (
        <>
          <div className="break"></div>
          <form action="">
            <div className="input-group">
              <label htmlFor="schoolName">School name</label>
              <input
                name="schoolName"
                type="text"
                id="schoolName"
                onChange={handleChange}
                value={educationData.schoolName || ""}
              />
            </div>
            <div className="input-group">
              <label htmlFor="TitleOfStudy">Title of study</label>
              <input
                name="titleOfStudy"
                type="text"
                id="titleOfStudy"
                onChange={handleChange}
                value={educationData.titleOfStudy || ""}
              />
            </div>
            {/* <div className="input-group">
              <label htmlFor="dateOfStudy">Date of Study</label>
              <input
                name="dateOfStudy"
                type="date"
                id="dateOfStudy"
                onChange={handleChange}
                value={educationData.dateOfStudy || ""}
              />
            </div> */}
            <div className="duration">
              <div className="input-group">
                <label htmlFor="startDate">Start date</label>
                <input
                  name="startDate"
                  type="text"
                  id="startDate"
                  onChange={handleChange}
                  value={educationData.startDate || ""}
                />
              </div>
              <div className="input-group">
                <label htmlFor="endDate">End date</label>
                <input
                  name="endDate"
                  type="text"
                  id="endDate"
                  onChange={handleChange}
                  value={educationData.endDate || ""}
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
                value={educationData.location || ""}
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
                <button className="btn btn-primary submit-button" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
