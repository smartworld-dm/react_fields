import React from "react";

//All States
//pulled from ../AnnualReport/VirginiaAdditionalInformation.js

const NaicsCode = ({}) => {
  return (
    <div className="col-md-6">
      <div className="form-group">
        <label>
          NAICS Code: <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="naics_code"
          className="form-control"
        />
      </div>
    </div>
  );
};

export default NaicsCode;
