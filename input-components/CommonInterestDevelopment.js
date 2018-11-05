import React from "react";

//All States
//pulled from ../initialReport/CaliforniaNonProfit.js

const CommonInterestDevelopment = ({}) => {
  return (
    <div className="col-md-6">
      <div className="form-group">
        <label>
          Is this corporation formed to manage a common interest
          development?
          <span className="text-danger">*</span>
        </label>
        <select
          name="common_interest_development"
          data-placeholder="Select One"
          className="select select2-hidden-accessible"
          tabIndex={-1}
          required
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
        <span
          className="select2 select2-container select2-container--default"
          dir="ltr"
          style={{
            width: "100%"
          }}
        >
          <span className="selection">
            <span
              className="select2-selection select2-selection--single"
              role="combobox"
              aria-haspopup="true"
              aria-expanded="false"
              tabIndex={0}
              aria-labelledby="select2-common_interest_development-ho-container"
            >
              <span
                className="select2-selection__rendered"
                id="select2-common_interest_development-ho-container"
                title="No"
              >
                No
              </span>
              <span
                className="select2-selection__arrow"
                role="presentation"
              >
                <b role="presentation" />
              </span>
            </span>
          </span>
          <span className="dropdown-wrapper" aria-hidden="true" />
        </span>
        <span className="help-block">
          A "common interest development" means (1) A community
          apartment project. (2) A condominium project. (3) A
          planned development. (4) A stock cooperative.
        </span>
      </div>
    </div>
  );
};

export default CommonInterestDevelopment;
