import React from "react";

//All States
//pulled from ../AnnualReport/MinnesotaAdditionalInformation.js

const FarmLand = ({}) => {
  return (
    <div className="col-md-6">
      <div className="form-group">
        <label>
          Does this entity own, lease, or have any financial
          interest in agricultural land or land capable of
          being farmed? <span className="text-danger">*</span>
        </label>
        <select
          name="farm_land"
          data-placeholder="Select One"
          tabIndex={-1}
          aria-hidden="true"
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>
    </div>
  );
};

export default FarmLand;
