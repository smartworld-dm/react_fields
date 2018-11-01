import React from "react";

//All States
//pulled from ../AnnualReport/ArizonaAdditionalInformation.js

const InjectionOrJudgement = ({}) => {
  return (
    <div className="col-md-12">
        <div className="form-group">
          <label>
            Subject to an injunction, judgement, decree or
            permanent order of any state or federal court
            entered within the last five years where such
            injunction, judgement, decree or permanent order
            involved the violation of: fraud of registration
            provisions of the securities laws of that
            jurisdiction, or the consumer fraud laws of that
            jurisdiction, or the antitrust of restraint of trade
            laws of that jurisdiction?
            <span className="text-danger">*</span>
          </label>
          <select
            name="injunction_or_judgement"
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
                aria-labelledby="select2-injunction_or_judgement-z9-container"
              >
                <span
                  className="select2-selection__rendered"
                  id="select2-injunction_or_judgement-z9-container"
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

export default InjectionOrJudgement;
