import React from "react";

const WashingtonAdditionalInformation = ({}) => {
    return (
        <div className="additionalInformationWashington hide">
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
                            Does your business own any real property?{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="own_real_property"
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
                                    aria-labelledby="select2-own_real_property-83-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-own_real_property-83-container"
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
                            “Real property” means land or anything affixed to
                            land, including standing timber or crops. Examples:
                            Buildings, condominiums, used park model trailers,
                            used floating homes, underground irrigation systems
                            or utilities, and other types of property that are
                            permanently affixed such as leasehold improvements
                            not required to be removed at the end of your lease.
                            See WAC 458-61A-102 &amp; WAC 458-61A-106 for
                            additional information.
                        </span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>
                            Has there been a transfer of stock, other financial
                            interest change, or an option agreement exercised
                            during the last 12 months that resulted in a
                            transfer of controlling interest?
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="transfer_of_stock"
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
                                    aria-labelledby="select2-transfer_of_stock-gz-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-transfer_of_stock-gz-container"
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
                            If your company owns land, buildings, or other real
                            estate in Washington State AND you answered "YES" to
                            this question above, you must contact the Washington
                            State Department of Revenue to report a Controlling
                            Interest Transfer. Failure to report the transfer is
                            subject to the penalty provisions of RCW 82.45.220.
                            For more information please call the Dept. of
                            Revenue at (360) 534-1503, option 1, or visit
                            www.dor.wa.gov/REET.
                        </span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>
                            Has an option agreement been executed in the last 12
                            months allowing for the future purchase or
                            acquisition of the entity, that, if exercised would
                            result in a transfer of controlling interest?
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="option_agreement_executed"
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
                                    aria-labelledby="select2-option_agreement_executed-gz-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-option_agreement_executed-gz-container"
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

export default WashingtonAdditionalInformation;
