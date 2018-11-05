import React from "react";

//All States
//pulled from ../CertifiedCopy/OwnerLLC.js

const FormCheckInput = ({}) => {
  return (
    <div className="col-md-12">
      <div className="form-group">
        <label className="display-block text-semibold">
          How is your LLC managed?
        </label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="managed"
            id="exampleRadios1"
            value="member"
          />
          <label
            className="form-check-label"
            htmlFor="managed"
          >
            The LLC will be managed by
            <strong>&nbsp;member(s)</strong>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FormCheckInput;
