import React from "react";

const NevadaAdditionalInformation = ({}) => {
    return (
        <div className="additionalInformationNonprofitsNevada hide">
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
                            Does your corporation intend to solicit
                            charitable/tax deductible contributions?{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="solicit_contributions"
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
                                    aria-labelledby="select2-solicit_contributions-vw-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-solicit_contributions-vw-container"
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
                            What does "Solicit charitable contributions" mean?
                            "Solicit charitable contributions" means to request
                            a contribution, donation, gift or the like that is
                            made by any means, including, without limitation: a.
                            Mail; b. Commercial carrier; c. Telephone,
                            facsimile, electronic mail or other electronic
                            device; or A face-to-face meeting. d. The term
                            includes requests for contributions, donations,
                            gifts or the like which are made from a location
                            within this State and solicitations which are made
                            from a location outside of this State to persons
                            located in this State, but does not include a
                            request for contributions, donations, gifts or the
                            like which is directed only to a total of fewer than
                            15 persons or only to persons who are related within
                            the third degree of consanguinity or affinity to the
                            officers, directors, trustees or executive personnel
                            of the corporation. Foreign nonprofit corporations
                            qualified to do business in Nevada pursuant to
                            Chapter 80, domestic nonprofit corporations pursuant
                            to Chapter 82, and Chapter 81 of the Nevada Revised
                            Statutes that currently solicit or intend to solicit
                            charitable contributions in Nevada must indicate so
                            on their initial or annual list of officers and
                            submit the Charitable Solicitation Registration
                            Statement. Prior to soliciting charitable
                            contributions in Nevada, a foreign nonprofit
                            corporation must qualify to do business in Nevada by
                            filing the proper qualification documents with the
                            Nevada Secretary of State’s Office. Questions?
                            Please contact customer support at (800) 450-8594
                            option 9.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NevadaAdditionalInformation;
