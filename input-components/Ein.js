import React from "react";

//All States
//pulled from ../AnnualReport/ArkansasAdditionalInformation.js

const Ein = ({}) => {
  return (
    <div className="col-md-6">
      <div className="form-group">
        <label>
          Your Federal Tax ID (EIN):{" "}
          <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="ein_arkansas"
          data-mask="99-9999999"
          placeholder="EIN"
          className="form-control"
          defaultValue={piloted.ein}
        />
      </div>
    </div>
  );
};

export default Ein;
