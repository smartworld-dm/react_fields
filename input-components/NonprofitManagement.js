import React from "react";

//All States
//pulled from ../AnnualReport/ArizonaAdditionalInformation.js

const NonprofitManagement = ({}) => {
  return (
    <div className="col-md-12">
      <div className="form-group">
        <label>
          Please select which statement is true below{" "}
          <span className="text-danger">*</span>
        </label>
        <select
          name="nonprofit_management"
          data-placeholder="Select One"
          className="select select2-hidden-accessible required"
          tabIndex={-1}
          aria-hidden="true"
        >
          <option />
          <option value="Has Members">
            This nonprofit corporation DOES have members
          </option>
          <option value="No Members">
            This nonprofit corporation DOES NOT have
            members
          </option>
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
              aria-labelledby="select2-nonprofit_management-4w-container"
            >
              <span
                className="select2-selection__rendered"
                id="select2-nonprofit_management-4w-container"
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

export default NonprofitManagement;
