import React from "react";

const IllinoisAdditionalInformation = ({}) => {
    return (
        <div className="additionalInformationIllinois hide">
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
                            Is all property owned by the company located in
                            Illinois and all business transacted by the company
                            transacted in Illinois?{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="all_property_and_business_in_illinois"
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
                                    aria-labelledby="select2-all_property_and_business_in_illinois-m5-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-all_property_and_business_in_illinois-m5-container"
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
                            Does the company own property outside of Illinois
                            and/or transacts business outside of Illinois?{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="property_and_business_outside_illinois"
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
                                    aria-labelledby="select2-property_and_business_outside_illinois-n3-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-property_and_business_outside_illinois-n3-container"
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
                            Is this corporation a Condominium Association as
                            established under the Condominium Property Act?{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="condominium_association"
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
                                    aria-labelledby="select2-condominium_association-b2-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-condominium_association-b2-container"
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
                            Is this corporation a Cooperative Housing
                            Corporation as defined in Section 216 of the
                            Internal Revenue Code of 1954?{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="cooperative_housing_corporation"
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
                                    aria-labelledby="select2-cooperative_housing_corporation-9g-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-cooperative_housing_corporation-9g-container"
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
                            Is this corporation a Homeowner's Association which
                            administers a common-interest community as defined
                            in subsection (c) of Section 9-102 of the Code of
                            Civil Procedure?
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="homeowner_association"
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
                                    aria-labelledby="select2-homeowner_association-r1-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-homeowner_association-r1-container"
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
                            Which of the following statements is true for the
                            company: <span className="text-danger">*</span>
                        </label>
                        <select
                            name="true_statement"
                            data-placeholder="Select One"
                            className="select select2-hidden-accessible"
                            tabIndex={-1}
                            aria-hidden="true"
                        >
                            <option />
                            <option value="A minority owns 51% or more of the company">
                                A minority owns 51% or more of the company.
                            </option>
                            <option value="A female owns 51% or more of the company">
                                A female owns 51% or more of the company
                            </option>
                            <option value="A minority female owns 51% or more of company">
                                A minority female owns 51% or more of company
                            </option>
                            <option value="None of the above statements are true for the company">
                                None of the above statements are true for the
                                company
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
                                    aria-labelledby="select2-true_statement-b8-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-true_statement-b8-container"
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

export default IllinoisAdditionalInformation;
