import React from "react";

//All States
//pulled from ../AnnualReport/TexasAdditionalInformation.js

const OtherEntitiesOwned = ({}) => {
  return (
    <div className="col-md-12">
      <div className="form-group">
        <label className="text-semibold">
          Does <u>this entity</u> own 10% or more of another
          entity? If so, enter information for each
          corporation, LLC, LP, PA or financial institution,
          in which
          <u>this entity</u> owns an interest of 10 percent or
          more.
        </label>
        <input
          type="text"
          name="other_entities_owned"
          placeholder="My Corp Inc (Formation State: Texas, % of Ownership: 15%); My Other Company, LLC (Formation State: Delaware, % of Ownership: 30%)"
          className="form-control"
        />
        <span className="help-block">
          Separate each with a semicolon ( ; )
        </span>
      </div>
    </div>
  );
};

export default OtherEntitiesOwned;
