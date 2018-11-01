import React from "react";

//All States
//pulled from ../AnnualReport/ArizonaAdditionalInformation.js

const ServedInOtherCorpInBankruptcy = ({}) => {
  return (
    <div className="col-md-12">
      <div className="form-group">
        <label>
          Has any person who is currently an officer,
          director, or who controls or holds over 20% of the
          issued and outstanding common shares served in any
          such capacity or held a 20% interest in any other
          corporation in bankruptcy or receivership?
          <span className="text-danger">*</span>
        </label>
        <select
          name="served_in_other_corporation_in_bankruptcy"
          data-placeholder="Select One"
          className="select select2-hidden-accessible required"
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
              aria-labelledby="select2-served_in_other_corporation_in_bankruptcy-38-container"
            >
              <span
                className="select2-selection__rendered"
                id="select2-served_in_other_corporation_in_bankruptcy-38-container"
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
      </div>
    </div>
  );
};

export default ServedInOtherCorpInBankruptcy;
