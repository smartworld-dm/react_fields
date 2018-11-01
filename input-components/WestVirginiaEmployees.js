import React from "react";

//All States
//pulled from ../AnnualReport/VirginiaAdditionalInformation.js

const WestVirginiaEmployees = ({}) => {
  return (
    <div className="col-md-6">
      <div className="form-group">
        <label>
          Number of West Virginia employees:{" "}
          <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="west_virginia_employees"
          className="form-control"
        />
      </div>
    </div>
  );
};

export default WestVirginiaEmployees;
