import React from "react";

//All States
//pulled from ../AnnualReport/TexasAdditionalInformation.js

const AccountingYearBeginDate = ({}) => {
  return (
    <div className="col-md-4">
      <div className="form-group">
        <label>
          Accounting Year Begin Date{" "}
          <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="accounting_year_begin_date"
          placeholder="mm/dd"
          className="form-control"
          defaultValue="01/01"
        />
      </div>
    </div>
  );
};

export default AccountingYearBeginDate;
