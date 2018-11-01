import React from "react";

//All States
//pulled from ../AnnualReport/IllinoisAdditionalInformation.js

const HouseOwnerAssociation = ({}) => {
  return (
    <div className="col-md-12">
      <div className="form-group">
        <label>
          Is this corporation a Homeowner's Association which
          administers a common-interest community as defined
          in subsection (c) of Section 9-102 of the Code of
          Civil Procedure?
          <span className="text-danger">*</span>
        </label>
        <select
          name="homeowner_association"
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
                aria-labelledby="select2-homeowner_association-r1-container"
              >
                <span
                  className="select2-selection__rendered"
                  id="select2-homeowner_association-r1-container"
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

export default HouseOwnerAssociation;
