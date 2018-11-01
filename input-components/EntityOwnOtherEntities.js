import React from "react";

//All States
//pulled from ../AnnualReport/TexasAdditionalInformation.js

const EntityOwnOtherEntities = ({}) => {
  return (
    <div className="col-md-4">
      <div className="form-group">
        <label>
          Does this entity own a stake or interest in a
          separately formed entity in the state of Texas or
          another state?{" "}
          <span className="text-danger">*</span>
        </label>
        <select
          name="entity_own_other_entities"
          data-placeholder="Select One"
          className="select select2-hidden-accessible"
          tabIndex={-1}
          aria-hidden="true"
        >
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
              aria-labelledby="select2-entity_own_other_entities-bu-container"
            >
              <span
                className="select2-selection__rendered"
                id="select2-entity_own_other_entities-bu-container"
                title="No"
              >
                No
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

export default EntityOwnOtherEntities;
