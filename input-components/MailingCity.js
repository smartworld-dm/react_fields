import React from "react";

//All States
//pulled from ../AnnualReport/TexasAdditionalInformation.js

const MailingCity = ({}) => {
  return (
    <div className="col-md-6">
      <div className="form-group">
        <label>City:</label>{" "}
        <input
          type="text"
          name="mailing_city"
          placeholder="City"
          className="form-control"
        />
      </div>
    </div>
  );
};

export default MailingCity;
