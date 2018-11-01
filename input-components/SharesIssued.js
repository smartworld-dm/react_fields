import React from "react";

//All States
//pulled from ../AnnualReport/ArizonaAdditionalInformation.js

const SharesIssued = ({}) => {
  return (
    <div className="col-md-6">
      <div className="form-group">
        <label>
          Number of Shares actually issued:{" "}
          <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="shares_issued"
          placeholder="Authorized Shares Issued"
          className="form-control required"
        />
        <span className="help-block">
          This is the total number of shares your corporation{" "}
          <u>
            <b>has issued</b>
          </u>
        </span>
      </div>
    </div>
  );
};

export default SharesIssued;
