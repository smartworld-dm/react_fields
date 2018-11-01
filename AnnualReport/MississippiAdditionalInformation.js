import React from "react";

const MississippiAdditionalInformation = ({}) => {
    return (
        <div className="additionalInformationMississippi hide">
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
                            Your Federal Tax ID (EIN):{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="ein_mississippi"
                            data-mask="99-9999999"
                            placeholder="EIN"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="col-md-6 additionalInformationMississippiCorporation hide">
                    <div className="form-group">
                        <label>
                            How many shares have been issued by your
                            corporation?: <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="shares_issued_mississippi"
                            placeholder="Shares Issued"
                            className="form-control"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MississippiAdditionalInformation;
