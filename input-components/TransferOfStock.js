import React from "react";

//All States
//pulled from ../AnnualReport/WashingtonAdditionalInformation.js

const TransferOfStock = ({}) => {
  return (
    <div className="col-md-6">
      <div className="form-group">
        <label>
          Has there been a transfer of stock, other financial
          interest change, or an option agreement exercised
          during the last 12 months that resulted in a
          transfer of controlling interest?
          <span className="text-danger">*</span>
        </label>
        <select
          name="transfer_of_stock"
          data-placeholder="Select One"
          className="select select2-hidden-accessible"
          tabIndex={-1}
          aria-hidden="true"
        >
          <option />
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
        <span
          className="select2 select2-container select2-container--default"
          dir="ltr"
          style={{
            width: "100%"
          }}
        >
            <span className="selection">
              <span
                  className="select2-selection select2-selection--single"
                  role="combobox"
                  aria-haspopup="true"
                  aria-expanded="false"
                  tabIndex={0}
                  aria-labelledby="select2-transfer_of_stock-gz-container"
              >
              <span
                className="select2-selection__rendered"
                id="select2-transfer_of_stock-gz-container"
              >
                <span className="select2-selection__placeholder">
                  Select One
                </span>
              </span>
              <span
                className="select2-selection__arrow"
                role="presentation"
              >
                <b role="presentation" />
              </span>
            </span>
          </span>
          <span
              className="dropdown-wrapper"
              aria-hidden="true"
          />
        </span>
        <span className="help-block">
          If your company owns land, buildings, or other real
          estate in Washington State AND you answered "YES" to
          this question above, you must contact the Washington
          State Department of Revenue to report a Controlling
          Interest Transfer. Failure to report the transfer is
          subject to the penalty provisions of RCW 82.45.220.
          For more information please call the Dept. of
          Revenue at (360) 534-1503, option 1, or visit
          www.dor.wa.gov/REET.
        </span>
      </div>
    </div>
  );
};

export default TransferOfStock;
