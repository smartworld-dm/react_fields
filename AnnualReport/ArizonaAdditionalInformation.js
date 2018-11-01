import React from "react";

const ArizonaAdditionalInformation = ({}) => {
    return (
        <div className="additionalInformationArizona">
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
                            Number of Shares authorized to be issued:{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="authorized_shares_arizona"
                            placeholder="Authorized Shares"
                            className="form-control required"
                        />
                        <span className="help-block">
                            This is the total number of shares your corporation
                            is permitted to issue
                        </span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>
                            Number of Shares actually issued:{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="shares_issued"
                            placeholder="Authorized Shares Issued"
                            className="form-control required"
                        />
                        <span className="help-block">
                            This is the total number of shares your corporation{" "}
                            <u>
                                <b>has issued</b>
                            </u>
                        </span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label>
                            Does any shareholder hold more than 20% of the
                            corporation's issued stock or have more than a 20%
                            beneficial interest in the corporation?{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="shareholders_own_20_percent"
                            data-placeholder="Select One"
                            className="select select2-hidden-accessible required"
                            tabIndex={-1}
                            aria-hidden="true"
                        >
                            <option />
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
                                    aria-labelledby="select2-shareholders_own_20_percent-0z-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-shareholders_own_20_percent-0z-container"
                                    >
                                        <span className="select2-selection__placeholder">
                                            Select One
                                        </span>
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
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label>
                            FULL NAME of all shareholders who own more than 20%
                            of issued shares:{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="names_shareholders_own_20_percent"
                            placeholder="John Doe; Jane Smith; Acme, LLC; My Corp Inc"
                            className="form-control"
                        />
                        <span className="help-block">
                            Separate each shareholder with a semicolon (;)
                        </span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <p>
                        <b>
                            Has ANY person who is currently an officer,
                            director, or who controls or holds more than 10% of
                            the issued and outstanding common shares directly or
                            beneficially been:
                        </b>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label>
                            Convicted of a felony involving a transaction in
                            securities, consumer fraud or antitrust in any state
                            or federal jurisdiction within the last five year
                            period?
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="convicted_of_felony_securities"
                            data-placeholder="Select One"
                            className="select select2-hidden-accessible required"
                            tabIndex={-1}
                            aria-hidden="true"
                        >
                            <option />
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
                                    aria-labelledby="select2-convicted_of_felony_securities-4i-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-convicted_of_felony_securities-4i-container"
                                    >
                                        <span className="select2-selection__placeholder">
                                            Select One
                                        </span>
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
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label>
                            Convicted of a felony, the essential elements of
                            which consisted of fraud, misrepresentation, theft
                            by false pretenses or restraint of trade or monopoly
                            in any state or federal jurisdiction within the last
                            five years?
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="convicted_of_felony_misrepresentation"
                            data-placeholder="Select One"
                            className="select select2-hidden-accessible required"
                            tabIndex={-1}
                            aria-hidden="true"
                        >
                            <option />
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
                                    aria-labelledby="select2-convicted_of_felony_misrepresentation-gu-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-convicted_of_felony_misrepresentation-gu-container"
                                    >
                                        <span className="select2-selection__placeholder">
                                            Select One
                                        </span>
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
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label>
                            Subject to an injunction, judgement, decree or
                            permanent order of any state or federal court
                            entered within the last five years where such
                            injunction, judgement, decree or permanent order
                            involved the violation of: fraud of registration
                            provisions of the securities laws of that
                            jurisdiction, or the consumer fraud laws of that
                            jurisdiction, or the antitrust of restraint of trade
                            laws of that jurisdiction?
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="injunction_or_judgement"
                            data-placeholder="Select One"
                            className="select select2-hidden-accessible required"
                            tabIndex={-1}
                            aria-hidden="true"
                        >
                            <option />
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
                                    aria-labelledby="select2-injunction_or_judgement-z9-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-injunction_or_judgement-z9-container"
                                    >
                                        <span className="select2-selection__placeholder">
                                            Select One
                                        </span>
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
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label>
                            Has any person who is currently an officer,
                            director, or who controls or holds over 20% of the
                            issued and outstanding common shares served in any
                            such capacity or held a 20% interest in any other
                            corporation in bankruptcy or receivership?
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="served_in_other_corporation_in_bankruptcy"
                            data-placeholder="Select One"
                            className="select select2-hidden-accessible required"
                            tabIndex={-1}
                            aria-hidden="true"
                        >
                            <option />
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
                                    aria-labelledby="select2-served_in_other_corporation_in_bankruptcy-38-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-served_in_other_corporation_in_bankruptcy-38-container"
                                    >
                                        <span className="select2-selection__placeholder">
                                            Select One
                                        </span>
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
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label>
                            Has the corporation filed a petition for bankruptcy
                            or appointed a receiver?{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="filed_bankruptcy"
                            data-placeholder="Select One"
                            className="select select2-hidden-accessible required"
                            tabIndex={-1}
                            aria-hidden="true"
                        >
                            <option />
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
                                    aria-labelledby="select2-filed_bankruptcy-lh-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-filed_bankruptcy-lh-container"
                                    >
                                        <span className="select2-selection__placeholder">
                                            Select One
                                        </span>
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
            </div>
            <div className="additionalInformationNonprofitArizona">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>
                                Please select which statement is true below{" "}
                                <span className="text-danger">*</span>
                            </label>
                            <select
                                name="nonprofit_management"
                                data-placeholder="Select One"
                                className="select select2-hidden-accessible required"
                                tabIndex={-1}
                                aria-hidden="true"
                            >
                                <option />
                                <option value="Has Members">
                                    This nonprofit corporation DOES have members
                                </option>
                                <option value="No Members">
                                    This nonprofit corporation DOES NOT have
                                    members
                                </option>
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
                                        aria-labelledby="select2-nonprofit_management-4w-container"
                                    >
                                        <span
                                            className="select2-selection__rendered"
                                            id="select2-nonprofit_management-4w-container"
                                        >
                                            <span className="select2-selection__placeholder">
                                                Select One
                                            </span>
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
                </div>
            </div>
        </div>
    );
};

export default ArizonaAdditionalInformation;
