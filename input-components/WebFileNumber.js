import React from "react";

//All States
//pulled from ../AnnualReport/TexasAdditionalInformation.js

const WebFileNumber = ({}) => {
  return (
    <div className="col-md-6">
      <div className="form-group">
        <label>
          Texas WebFile Number{" "}
          <span className="text-danger">*</span>
        </label>
        <div className="input-group">
          <span className="input-group-addon">
            XT or RT #
          </span>
          <input
            type="text"
            name="webfile_number"
            placeholder="XT/RT123456"
            className="form-control"
          />
        </div>
      </div>
    </div>
  );
};

export default WebFileNumber;
