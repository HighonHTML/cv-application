import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function Experience({
  isActive,
  handleActiveIdChange,
  className,
  experienceData,
  handleChange,
}) {
  function handleSubmit(e) {
    e.target.reset();
    e.preventDefault();
  }
  return (
    <div className={className}>
      <div className="form-heading">
        <FontAwesomeIcon icon={faBriefcase} />
        <h3 onClick={() => handleActiveIdChange(2)}>Experience</h3>
      </div>
      {isActive ? (
        <>
          <div className="break"></div>
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <div className="input-group">
              <label htmlFor="companyName">Company name</label>
              <input
                name="companyName"
                type="text"
                id="companyName"
                onChange={handleChange}
                value={experienceData.companyName || ""}
              />
            </div>
            <div className="input-group">
              <label htmlFor="positionTitle">Position Title</label>
              <input
                type="text"
                id="positionTitle"
                name="positionTitle"
                onChange={handleChange}
                value={experienceData.positionTitle || ""}
              />
            </div>
            <div className="input-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                onChange={handleChange}
                value={experienceData.description || ""}
              />
            </div>
            <div className="duration">
              <div className="input-group">
                <label htmlFor="startDate">From date</label>
                <input
                  type="text"
                  id="startDate"
                  name="startDate"
                  onChange={handleChange}
                  value={experienceData.startDate || ""}
                />
              </div>
              <div className="input-group">
                <label htmlFor="endDate">To date</label>
                <input
                  type="text"
                  id="endDate"
                  name="endDate"
                  onChange={handleChange}
                  value={experienceData.endDate || ""}
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
                value={experienceData.location || ""}
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
