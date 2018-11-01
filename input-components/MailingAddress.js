import React from "react";

//All States
//pulled from ../AnnualReport/TexasAdditionalInformation.js

const MailingAddress = ({}) => {
  return (
    <div className="col-md-6">
      <div className="form-group">
        <label>Address:</label>
        <input
          type="text"
          name="mailing_address"
          placeholder="123 Mailing St"
          className="form-control"
        />
      </div>
    </div>
  );
};

export default MailingAddress;
