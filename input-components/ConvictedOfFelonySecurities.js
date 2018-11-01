import React from "react";

//All States
//pulled from ../AnnualReport/ArizonaAdditionalInformation.js

const ConvictedOfFelonySecurities = ({}) => {
  return (
    <div className="col-md-12">
      <div className="form-group">
        <label>
          Convicted of a felony involving a transaction in
          securities, consumer fraud or antitrust in any state
          or federal jurisdiction within the last five year
          period?
          <span className="text-danger">*</span>
        </label>
        <select
          name="convicted_of_felony_securities"
          data-placeholder="Select One"
          className="select select2-hidden-accessible required"
          tabIndex={-1}
          aria-hidden="true"
        >
          <option />
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
              aria-labelledby="select2-convicted_of_felony_securities-4i-container"
            >
              <span
                className="select2-selection__rendered"
                id="select2-convicted_of_felony_securities-4i-container"
              >
                <span className="select2-selection__placeholder">
                  Select One
                </span>
              </span>
              <span
                className="select2-selection__arrow"
                role="presentation"
              >
                <b role="presentation" />
              </span>
            </span>
          </span>
          <span
            className="dropdown-wrapper"
            aria-hidden="true"
          />
        </span>
      </div>
    </div>
  );
};

export default ConvictedOfFelonySecurities;
