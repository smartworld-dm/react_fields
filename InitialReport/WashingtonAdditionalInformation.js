import React from "react";

const WashingtonAdditionalInformation = ({ piloted }) => {
    return (
        <div>
            <br />
            <div className="row">
                <div className="col-md-12">
                    <h6 className="text-semibold">
                        <code>Additional Information</code>
                    </h6>
                    <p className="text-muted">
                        Your state requires this additional information to file
                        your report.
                    </p>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>
                            Describe the type of business or services of the
                            entity:
                            <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="biz_description_washington"
                            className="form-control"
                            max="100"
                            required
                            placeholder="Maximum of 100 characters"
                            defaultValue={piloted.description || ""}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WashingtonAdditionalInformation;
