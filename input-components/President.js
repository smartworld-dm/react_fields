import React from "react";

//All States
//pulled from ../CertifiedCopy/OwnerManagement.js

const President = ({}) => {
  return (
    <div className="col-md-6">
      <div className="form-group">
        <label>President:</label>
        <input
          type="text"
          name="president"
          placeholder="President"
          className="form-control"
          required
        />
      </div>
    </div>
  );
};

export default President;
