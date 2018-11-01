import React from "react";

const KansasAdditionalInformation = ({}) => {
    return (
        <div className="additionalInformationKansas hide">
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
                            Does this entity have members/shareholders who own
                            5% or more of capital?{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="own_more_than_5_percent"
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
                                    aria-labelledby="select2-own_more_than_5_percent-v0-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-own_more_than_5_percent-v0-container"
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
                            Does the entity own or lease any land in Kansas that
                            is suitable for use in agriculture?{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="land_suitable_for_agriculture"
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
                                    aria-labelledby="select2-land_suitable_for_agriculture-ag-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-land_suitable_for_agriculture-ag-container"
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
                        <span className="help-block">
                            If you have land suitable for use in agriculture but
                            one or more of the following apply then you do
                            <u>not</u> need to select "Yes": 1) Tracts of land
                            are fewer than 10 acres; 2) Contiguous tracts of
                            land are fewer than 10 acres in aggregate; 3) State
                            assessed railroad opening property.
                        </span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label>
                            Does this entity hold more than 50% equity ownership
                            in any other business entity that is filed with the
                            Kansas Secretary of State?{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="50_percent_equity_ownership"
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
                                    aria-labelledby="select2-50_percent_equity_ownership-zo-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-50_percent_equity_ownership-zo-container"
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
                <div className="col-md-6">
                    <div className="form-group">
                        <label>
                            Your Federal Tax ID (EIN):{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="ein_kansas"
                            data-mask="99-9999999"
                            placeholder="EIN"
                            className="form-control"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KansasAdditionalInformation;
