import React from "react";

//All States
//pulled from ../AnnualReport/KansasAdditionalInformation.js

const LandsuitableForAgriculture = ({}) => {
  return (
    <div className="col-md-12">
      <div className="form-group">
        <label>
          Does the entity own or lease any land in Kansas that
          is suitable for use in agriculture?{" "}
          <span className="text-danger">*</span>
        </label>
        <select
          name="land_suitable_for_agriculture"
          data-placeholder="Select One"
          className="select select2-hidden-accessible"
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
              aria-labelledby="select2-land_suitable_for_agriculture-ag-container"
            >
              <span
                className="select2-selection__rendered"
                id="select2-land_suitable_for_agriculture-ag-container"
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
        <span className="help-block">
          If you have land suitable for use in agriculture but
          one or more of the following apply then you do
          <u>not</u> need to select "Yes": 1) Tracts of land
          are fewer than 10 acres; 2) Contiguous tracts of
          land are fewer than 10 acres in aggregate; 3) State
          assessed railroad opening property.
        </span>
      </div>
    </div>
  );
};

export default LandsuitableForAgriculture;
