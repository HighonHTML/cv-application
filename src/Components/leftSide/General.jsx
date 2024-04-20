import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function General({
  isActive,
  handleActiveIdChange,
  className,
  generalData,
  handleChange,
}) {
  function handleTitleClick(){
    isActive ? handleActiveIdChange(null) : handleActiveIdChange(0)
  }
  return (
    <div className={className}>
      <div className="form-heading">
        <FontAwesomeIcon icon={faUser} />
        <h3 onClick={handleTitleClick}>Personal Details</h3>
      </div>
      {isActive ? (
        <>
          <div className="break"></div>
          <form>
            <div className="input-group">
              <label htmlFor="name">Full name</label>
              <input
                name="name"
                type="text"
                id="name"
                onChange={handleChange}
                value={generalData.name || ""}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
                value={generalData.email || ""}
              />
            </div>
            <div className="input-group">
              <label htmlFor="phn">Phone Number</label>
              <input
                name="phoneNumber"
                type="text"
                id="phn"
                onChange={handleChange}
                value={generalData.phoneNumber || ""}
              />
            </div>
            <div className="input-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                onChange={handleChange}
                value={generalData.address || ""}
              />
            </div>
            {/* <div className="button-group">
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
            </div> */}
          </form>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
