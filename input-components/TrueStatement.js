import React from "react";

//All States
//pulled from ../AnnualReport/IllinoisAdditionalInformation.js

const TrueStatement = ({}) => {
  return (
    <div className="col-md-12">
      <div className="form-group">
        <label>
          Which of the following statements is true for the
          company: <span className="text-danger">*</span>
        </label>
        <select
          name="true_statement"
          data-placeholder="Select One"
          className="select select2-hidden-accessible"
          tabIndex={-1}
          aria-hidden="true"
        >
          <option />
          <option value="A minority owns 51% or more of the company">
            A minority owns 51% or more of the company.
          </option>
          <option value="A female owns 51% or more of the company">
            A female owns 51% or more of the company
          </option>
          <option value="A minority female owns 51% or more of company">
            A minority female owns 51% or more of company
          </option>
          <option value="None of the above statements are true for the company">
            None of the above statements are true for the
            company
          </option>
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
              aria-labelledby="select2-true_statement-b8-container"
            >
              <span
                className="select2-selection__rendered"
                id="select2-true_statement-b8-container"
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

export default TrueStatement;
