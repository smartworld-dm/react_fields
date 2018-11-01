import React from "react";

//All States
//pulled from ../AnnualReport/KentuckyAdditionalInformation.js

const SizeOfBiz = ({}) => {
  return (
    <div className="col-md-6">
      <div className="form-group">
        <label>
          Choose the size of your business:{" "}
          <span className="text-danger">*</span>
        </label>
        <select
          name="size_of_business"
          data-placeholder="Select One"
          className="select select2-hidden-accessible"
          tabIndex={-1}
          aria-hidden="true"
        >
          <option />
          <option value="Small (fewer than 50 employees)">
            Small (fewer than 50 employees)
          </option>
          <option value="Large (50 or more employees)">
            Large (50 or more employees)
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
              aria-labelledby="select2-size_of_business-3a-container"
            >
              <span
                className="select2-selection__rendered"
                id="select2-size_of_business-3a-container"
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

export default SizeOfBiz;
