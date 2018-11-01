import React from "react";

const BusinessDescription = ({}) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-12">
                    <h6 className="text-semibold">
                        <code>Business Description</code>
                    </h6>
                    <p className="text-muted">
                        Please provide a brief description of your business.
                    </p>
                </div>
            </div>
            <br />
            <div className="row">
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
            </div>
        </React.Fragment>
    );
};

export default BusinessDescription;
