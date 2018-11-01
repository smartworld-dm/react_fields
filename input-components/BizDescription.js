import React from "react";

//All States
//pulled from ../AnnualReport/BusinessDescription.js

const BizDescription = ({}) => {
  return (
    <div className="col-md-12">
      <div className="form-group">
        <label>
          Please provide a brief statement of the activities
          conducted by the entity{" "}
          <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="biz_description"
          placeholder="Brief statement of the activities"
          className="form-control required"
          aria-required="true"
        />
      </div>
    </div>
  );
};

export default BizDescription;
