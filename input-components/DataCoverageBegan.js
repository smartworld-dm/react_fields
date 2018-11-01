import React from "react";

//All States
//pulled from ../AnnualReport/NewJerseyAdditionalInformation.js

const DataCoverageBegan = ({}) => {
  return (
    <div className="col-md-6">
      <div className="form-group">
        <label>
          Date Coverage Began:{" "}
          <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="date_coverage_began"
          data-mask="99/99/9999"
          placeholder="Date Coverage Began"
          className="form-control"
        />
        <span className="help-block">
          If "self-insured", this would be your business start
          date. Otherwise, the date of purchase through the
          third-party.
        </span>
      </div>
    </div>
  );
};

export default DataCoverageBegan;
