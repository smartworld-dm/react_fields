import React from "react";

const DelawareAdditionalInformation = ({}) => {
    return (
        <div className="additionalInformationDelaware hide">
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
                        <label>Number of Shares authorized to be issued:</label>
                        <input
                            type="text"
                            name="authorized_shares_delaware"
                            placeholder="Example: 10,000"
                            className="form-control"
                        />
                        <span className="help-block">
                            This is the total number of shares your corporation
                            is permitted to issue
                        </span>
                    </div>
                </div>
                <div className="col-md-12">
                    <p>
                        *Delaware corporations are required to pay an annual
                        franchise tax when filing an annual report. The tax
                        assessment is based on your corporation's shares, using
                        either the Authorized Shares Method or the Assumed Par
                        Value Capital Method.
                    </p>
                    <p>
                        By default, the franchise tax is calculated by the
                        Delaware Division of Corporations using the Authorized
                        Shares Method. However, corporations with greater than
                        20,000 authorized shares may owe lower taxes using the
                        Assumed Par Value Capital Method. If you would like to
                        learn more about calculating franchise tax,
                        <a
                            href="https://corp.delaware.gov/frtaxcalc.shtml?_ga=1.98328479.1098269081.1473911327"
                            target="_blank"
                        >
                            click here
                        </a>
                        .
                    </p>
                    <p>
                        Swyft Filings only completes annual reports using the
                        Authorized Shares Method.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DelawareAdditionalInformation;
