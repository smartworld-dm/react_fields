import React from "react";

//All States
//pulled from ../AnnualReport/ArizonaAdditionalInformation.js

const NamesShareholdersOwn20 = ({}) => {
  return (
    <div className="col-md-12">
      <div className="form-group">
        <label>
          FULL NAME of all shareholders who own more than 20%
          of issued shares:{" "}
          <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="names_shareholders_own_20_percent"
          placeholder="John Doe; Jane Smith; Acme, LLC; My Corp Inc"
          className="form-control"
        />
        <span className="help-block">
          Separate each shareholder with a semicolon (;)
        </span>
      </div>
    </div>
  );
};

export default NamesShareholdersOwn20;
