import React from "react";

//All States
//pulled from ../AnnualReport/WashingtonAdditionalInformation.js

const OwnRealProperty = ({}) => {
  return (
    <div className="col-md-12">
      <div className="form-group">
        <label>
          Does your business own any real property?{" "}
          <span className="text-danger">*</span>
        </label>
        <select
          name="own_real_property"
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
              aria-labelledby="select2-own_real_property-83-container"
            >
              <span
                className="select2-selection__rendered"
                id="select2-own_real_property-83-container"
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
          “Real property” means land or anything affixed to
          land, including standing timber or crops. Examples:
          Buildings, condominiums, used park model trailers,
          used floating homes, underground irrigation systems
          or utilities, and other types of property that are
          permanently affixed such as leasehold improvements
          not required to be removed at the end of your lease.
          See WAC 458-61A-102 &amp; WAC 458-61A-106 for
          additional information.
        </span>
      </div>
    </div>
  );
};

export default OwnRealProperty;
