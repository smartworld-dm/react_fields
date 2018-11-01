import React from "react";

const VirginiaAdditionalInformation = ({}) => {
    return (
        <div className="additionalInformationWestVirginia hide">
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
                            NAICS Code: <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="naics_code"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>
                            COUNTY your business is located in:{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="county_name"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>
                            Number of West Virginia employees:{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="west_virginia_employees"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>
                            Total number of employees:{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="total_employees"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>
                            Are you a scrap metal dealer or recycler?
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="scrap_metal_dealer_or_recycler"
                            data-placeholder="Select One"
                            className="select select2-hidden-accessible"
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
                                    aria-labelledby="select2-scrap_metal_dealer_or_recycler-tf-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-scrap_metal_dealer_or_recycler-tf-container"
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
                <div className="col-md-6">
                    <div className="form-group">
                        <label>
                            Do you own or operate more than one business in West
                            Virginia?
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="operate_multipe_businesses"
                            data-placeholder="Select One"
                            className="select select2-hidden-accessible"
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
                                    aria-labelledby="select2-operate_multipe_businesses-gl-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-operate_multipe_businesses-gl-container"
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

export default VirginiaAdditionalInformation;
