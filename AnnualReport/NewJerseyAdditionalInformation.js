import React from "react";

const NewJerseyAdditionalInformation = ({}) => {
    return (
        <div className="additionalInformationNewJersey hide">
            <br />
            <div className="row">
                <div className="col-md-12">
                    <h6 className="text-semibold">
                        <code>Additional Information</code>
                    </h6>
                    <p className="text-muted">
                        Your state requires this additional information to file
                        your report. New Jersey requires that your business have
                        "Workers Comp" business insurance or you must be
                        "Self-Insured".
                    </p>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>
                            Insurance Company Name:{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="insurance_company_name"
                            placeholder="Insurance Company Name or Self-Insured"
                            className="form-control"
                        />
                        <span className="help-block">
                            If you did not purchase business insurance through a
                            third-party provider, please enter "Self-Insured"
                            above.
                        </span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Policy #:</label>
                        <input
                            type="text"
                            name="insurance_policy_number"
                            placeholder="Policy Number"
                            className="form-control"
                        />
                        <span className="help-block">
                            If you are "self-insured", please leave this option
                            blank
                        </span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>
                            Date Coverage Began:{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="date_coverage_began"
                            data-mask="99/99/9999"
                            placeholder="Date Coverage Began"
                            className="form-control"
                        />
                        <span className="help-block">
                            If "self-insured", this would be your business start
                            date. Otherwise, the date of purchase through the
                            third-party.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewJerseyAdditionalInformation;
