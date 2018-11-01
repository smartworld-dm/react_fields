import React from "react";
import CaliforniaNonProfit from "./CaliforniaNonProfit";

const CaliforniaAdditionalInformation = ({ piloted }) => {
    return (
        <div className="additionalInformationCalifornia">
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
                            name="biz_description"
                            className="form-control required"
                            max="30"
                            required
                            placeholder="Maximum of 30 characters"
                        />
                    </div>
                </div>
            </div>
            {(piloted.type = "Non Profit" && <CaliforniaNonProfit />)}
        </div>
    );
};

export default CaliforniaAdditionalInformation;
