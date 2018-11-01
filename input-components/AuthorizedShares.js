import React from "react";

//All States
//pulled from ../AnnualReport/ArizonaAdditionalInformation.js

const AuthorizedShares = ({}) => {
  return (
    <div className="col-md-6">
      <div className="form-group">
        <label>
          Number of Shares authorized to be issued:{" "}
          <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="authorized_shares"
          placeholder="Authorized Shares"
          className="form-control required"
        />
        <span className="help-block">
          This is the total number of shares your corporation is permitted to
          issue
        </span>
      </div>
    </div>
  );
};

export default AuthorizedShares;
