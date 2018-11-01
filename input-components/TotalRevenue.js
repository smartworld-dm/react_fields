import React from "react";

//All States
//pulled from ../AnnualReport/TexasAdditionalInformation.js

const TotalRevenue = ({}) => {
  return (
    <div className="col-md-4">
      <div className="form-group">
        <label>
          Total Revenue <span className="text-danger">*</span>
          <i
            className="icon-info22 text-muted"
            data-popup="tooltip"
            data-placement="top"
            style={{
              fontSize: 12,
              marginLeft: 7
            }}
            data-original-title="If your total annualized revenue is ABOVE $1,110,000.00, we CANNOT file your report. You will need to consult with your accountant or tax professional for assistance filing your Texas Franchise Tax Report. If your total annualized revenue is BELOW $1,110,000.00, we CAN file your report."
          />
        </label>
        <div className="input-group">
          <span className="input-group-addon">$</span>
          <input
            type="text"
            name="total_revenue"
            placeholder="100,000.00"
            className="form-control"
          />
        </div>
      </div>
    </div>
  );
};

export default TotalRevenue;
