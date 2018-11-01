import React from "react";

//All States
//pulled from ../AnnualReport/TexasAdditionalInformation.js

const AccountingYearEndDate = ({}) => {
  return (
    <div className="col-md-4">
      <div className="form-group">
        <label>
          Accounting Year End Date{" "}
          <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="accounting_year_end_date"
          placeholder="mm/dd"
          className="form-control"
          defaultValue="12/31"
        />
      </div>
    </div>
  );
};

export default AccountingYearEndDate;
