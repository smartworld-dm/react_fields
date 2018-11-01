import React from "react";

//All States
//pulled from ../AnnualReport/TexasAdditionalInformation.js

const EntitiesOwnedBy = ({}) => {
  return (
    <div className="col-md-12">
      <div className="form-group">
        <label className="text-semibold">
          Does
          <u>another entity</u> own 10% or more of this
          entity? If so, enter information for each
          corporation, LLC, LP, PA or financial institution,
          that owns an interest of 10 percent or more of
          <u>this entity</u>.
        </label>
        <input
          type="text"
          name="entities_owned_by"
          placeholder="Another Corp Inc (Formation State: Texas, % of Ownership: 20%); Another Company, LLC (Formation State: Nevada, % of Ownership: 10%)"
          className="form-control"
        />
        <span className="help-block">
          Separate each with a semicolon ( ; )
        </span>
      </div>
    </div>
  );
};

export default EntitiesOwnedBy;
