import React from "react";

//All States
//pulled from ../AnnualReport/KentuckyAdditionalInformation.js

const MakeUpBizOwnership = ({}) => {
  return (
    <div className="col-md-12">
      <div className="form-group">
        <label>
          Please indicate whether any of the following make up
          more than fifty percent (50%) of your business's
          ownership: <span className="text-danger">*</span>
        </label>
        <select
          name="make_up_business_ownership"
          data-placeholder="Select One"
          className="select select2-hidden-accessible"
          tabIndex={-1}
          aria-hidden="true"
        >
          <option />
          <option value="Women-owned">Women-owned</option>
          <option value="Veteran-owned">Veteran-owned</option>
          <option value="Minority-owned">
            Minority-owned
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
              aria-labelledby="select2-make_up_business_ownership-3x-container"
            >
              <span
                className="select2-selection__rendered"
                id="select2-make_up_business_ownership-3x-container"
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

export default MakeUpBizOwnership;
