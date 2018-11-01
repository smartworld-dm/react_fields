import React from "react";

//All States
//pulled from ../AnnualReport/KentuckyAdditionalInformation.js

const County = ({}) => {
  return (
    <div className="col-md-6">
      <div className="form-group">
        <label>
          Enter the county in which your business operates:{" "}
          <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="county_kentucky"
          placeholder="COUNTY"
          className="form-control"
        />
      </div>
    </div>
  );
};

export default County;
