import React from "react";

//All States
//pulled from ../AnnualReport/ArizonaAdditionalInformation.js

const ShareholdersOwn20 = ({}) => {
  return (
    <div className="col-md-12">
      <div className="form-group">
        <label>
          Does any shareholder hold more than 20% of the
          corporation's issued stock or have more than a 20%
          beneficial interest in the corporation?{" "}
          <span className="text-danger">*</span>
        </label>
        <select
          name="shareholders_own_20_percent"
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
              aria-labelledby="select2-shareholders_own_20_percent-0z-container"
            >
              <span
                className="select2-selection__rendered"
                id="select2-shareholders_own_20_percent-0z-container"
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

export default ShareholdersOwn20;
