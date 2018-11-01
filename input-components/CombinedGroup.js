import React from "react";

//All States
//pulled from ../AnnualReport/TexasAdditionalInformation.js

const CombinedGroup = ({}) => {
  return (
    <div className="col-md-4">
      <div className="form-group">
        <label>
          Is this the reporting entity of a combined group?{" "}
          <span className="text-danger">*</span>
        </label>
        <select
          name="combined_group"
          data-placeholder="Select One"
          className="select select2-hidden-accessible"
          tabIndex={-1}
          aria-hidden="true"
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
              aria-labelledby="select2-combined_group-j8-container"
            >
              <span
                className="select2-selection__rendered"
                id="select2-combined_group-j8-container"
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
          <span
            className="dropdown-wrapper"
            aria-hidden="true"
          />
        </span>
      </div>
    </div>
  );
};

export default CombinedGroup;
