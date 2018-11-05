import React from "react";

//All States
//pulled from ../CertifiedCopy/OwnerLLC.js

const Managers = ({ piloted }) => {
  return (
    <div className="col-md-12">
      <div className="form-group">
        <label className="text-semibold">
          Who are the current Members or Managers of the
          business?
        </label>
        <input
          type="text"
          name="managers"
          placeholder="John Doe; Jane Smith; Acme, LLC; My Corp Inc"
          className="form-control required"
          required
          defaultValue={
            piloted.managers
              .map(manager => manager.full_name)
              .join(";") || ""
          }
        />
        <span className="help-block">
          Separate each Member or Manager with a semicolon ( ;
          )
        </span>
      </div>
    </div>
  );
};

export default Managers;
