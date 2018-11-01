import React from "react";

const NevadaAdditionalInformation = ({}) => {
    return (
        <div className="additionalInformationNevada hide">
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
            </div>
        </div>
    );
};

export default NevadaAdditionalInformation;
