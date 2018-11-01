import React from "react";

//All States
//pulled from ../AnnualReport/NewJerseyAdditionalInformation.js

const InsurancePolicyNumber = ({}) => {
  return (
    <div className="form-group">
      <label>Policy #:</label>
      <input
        type="text"
        name="insurance_policy_number"
        placeholder="Policy Number"
        className="form-control"
      />
      <span className="help-block">
        If you are "self-insured", please leave this option
        blank
      </span>
    </div>
  );
};

export default InsurancePolicyNumber;
