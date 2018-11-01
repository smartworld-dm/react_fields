import React from "react";

//All States
//pulled from ../AnnualReport/VirginiaAdditionalInformation.js

const TotalEmployees = ({}) => {
  return (
    <div className="col-md-6">
      <div className="form-group">
          <label>
            Total number of employees:{" "}
            <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="total_employees"
            className="form-control"
          />
      </div>
    </div>
  );
};

export default TotalEmployees;
