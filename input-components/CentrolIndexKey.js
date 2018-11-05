import React from "react";

//All States
//pulled from ../initialReport/NevadaAdditionalInformation.js

const CentrolIndexKey = ({}) => {
  return (
    <div className="col-md-12">
      <div className="form-group">
        <label>
          ONLY IF PUBLICLY TRADED, enter your Central Index
          Key number:
        </label>
        <input
          type="text"
          name="central_index_key"
          className="form-control"
          max="30"
          required
          placeholder={1234567890}
        />
      </div>
    </div>
  );
};

export default CentrolIndexKey;
