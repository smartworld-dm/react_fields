import React from "react";

const component = ({}) => {
    return (
        <div className="additionalInformationMinnesota hide">
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
                            Does this entity own, lease, or have any financial
                            interest in agricultural land or land capable of
                            being farmed? <span className="text-danger">*</span>
                        </label>
                        <select
                            name="farm_land"
                            data-placeholder="Select One"
                            tabIndex={-1}
                            aria-hidden="true"
                        >
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default component;
