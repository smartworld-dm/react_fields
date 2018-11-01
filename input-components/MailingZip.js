import React from "react";

//All States
//pulled from ../AnnualReport/TexasAdditionalInformation.js

const MailingZip = ({}) => {
  return (
    <div className="col-md-6">
      <div className="form-group">
        <label>Zip Code:</label>
        <input
          type="text"
          name="mailing_zip"
          placeholder={12345}
          className="form-control"
          maxLength={10}
        />
      </div>
    </div>
  );
};

export default MailingZip;
