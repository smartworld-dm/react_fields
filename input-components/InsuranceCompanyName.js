import React from "react";

//All States
//pulled from ../AnnualReport/NewJerseyAdditionalInformation.js

const InsuranceCompanyName = ({}) => {
  return (
    <div className="col-md-6">
      <div className="form-group">
        <label>
          Insurance Company Name:{" "}
          <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="insurance_company_name"
          placeholder="Insurance Company Name or Self-Insured"
          className="form-control"
        />
        <span className="help-block">
          If you did not purchase business insurance through a
          third-party provider, please enter "Self-Insured"
          above.
        </span>
      </div>
    </div>
  );
};

export default InsuranceCompanyName;
