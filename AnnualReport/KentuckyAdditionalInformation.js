import React from "react";

const KentuckyAdditionalInformation = ({}) => {
    return (
        <div className="additionalInformationKentucky hide">
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
                            Enter the county in which your business operates:{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="county_kentucky"
                            placeholder="COUNTY"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>
                            Choose the size of your business:{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="size_of_business"
                            data-placeholder="Select One"
                            className="select select2-hidden-accessible"
                            tabIndex={-1}
                            aria-hidden="true"
                        >
                            <option />
                            <option value="Small (fewer than 50 employees)">
                                Small (fewer than 50 employees)
                            </option>
                            <option value="Large (50 or more employees)">
                                Large (50 or more employees)
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
                                    aria-labelledby="select2-size_of_business-3a-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-size_of_business-3a-container"
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
                            Please indicate whether any of the following make up
                            more than fifty percent (50%) of your business's
                            ownership: <span className="text-danger">*</span>
                        </label>
                        <select
                            name="make_up_business_ownership"
                            data-placeholder="Select One"
                            className="select select2-hidden-accessible"
                            tabIndex={-1}
                            aria-hidden="true"
                        >
                            <option />
                            <option value="Women-owned">Women-owned</option>
                            <option value="Veteran-owned">Veteran-owned</option>
                            <option value="Minority-owned">
                                Minority-owned
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
                                    aria-labelledby="select2-make_up_business_ownership-3x-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-make_up_business_ownership-3x-container"
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
    );
};

export default KentuckyAdditionalInformation;
