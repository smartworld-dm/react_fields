import React from "react";

const TexasAdditionalInformation = ({}) => {
    return (
        <div className="additionalInformationTexas hide">
            <br />
            <div className="row">
                <div className="col-md-12">
                    <h6 className="text-semibold">
                        <code>Additional Information</code>
                    </h6>
                    <p className="text-muted">
                        Your state requires this additional information to file
                        your report. We have preselected some of the most common
                        answers to the questions below.
                    </p>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label>
                            Is this the reporting entity of a combined group?{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="combined_group"
                            data-placeholder="Select One"
                            className="select select2-hidden-accessible"
                            tabIndex={-1}
                            aria-hidden="true"
                        >
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
                                    aria-labelledby="select2-combined_group-j8-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-combined_group-j8-container"
                                        title="No"
                                    >
                                        No
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
                <div className="col-md-4">
                    <div className="form-group">
                        <label>
                            Do any of the entities in the combined group have a
                            temporary business loss preserved?{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="business_loss_preserved"
                            data-placeholder="Select One"
                            className="select select2-hidden-accessible"
                            tabIndex={-1}
                            aria-hidden="true"
                        >
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
                                    aria-labelledby="select2-business_loss_preserved-l9-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-business_loss_preserved-l9-container"
                                        title="No"
                                    >
                                        No
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
                <div className="col-md-4">
                    <div className="form-group">
                        <label>
                            Will your total revenue be adjusted for the Tiered
                            Partnership election?{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="tiered_partnership_election"
                            data-placeholder="Select One"
                            className="select select2-hidden-accessible"
                            tabIndex={-1}
                            aria-hidden="true"
                        >
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
                                    aria-labelledby="select2-tiered_partnership_election-y1-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-tiered_partnership_election-y1-container"
                                        title="No"
                                    >
                                        No
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
                <div className="col-md-4">
                    <div className="form-group">
                        <label>
                            Is this a passive entity as defined in Chapter 171
                            of the Texas Tax Code?{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="passive_entity"
                            data-placeholder="Select One"
                            className="select select2-hidden-accessible"
                            tabIndex={-1}
                            aria-hidden="true"
                        >
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
                                    aria-labelledby="select2-passive_entity-zg-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-passive_entity-zg-container"
                                        title="No"
                                    >
                                        No
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
                <div className="col-md-4">
                    <div className="form-group">
                        <label>
                            Is this entity's annualized total revenue below the
                            no tax threshold?{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="below_tax_threshold"
                            data-placeholder="Select One"
                            className="select select2-hidden-accessible"
                            tabIndex={-1}
                            aria-hidden="true"
                        >
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
                                    aria-labelledby="select2-below_tax_threshold-gi-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-below_tax_threshold-gi-container"
                                        title="Yes"
                                    >
                                        Yes
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
                <div className="col-md-4">
                    <div className="form-group">
                        <label>
                            Does the entity have zero Texas Gross Receipts?{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="zero_gross_receipts"
                            data-placeholder="Select One"
                            className="select select2-hidden-accessible"
                            tabIndex={-1}
                            aria-hidden="true"
                        >
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
                                    aria-labelledby="select2-zero_gross_receipts-rf-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-zero_gross_receipts-rf-container"
                                        title="No"
                                    >
                                        No
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
                <div className="col-md-4">
                    <div className="form-group">
                        <label>
                            Is this entity a Real Estate Investment Trust (REIT)
                            that meets the qualifications specified in section
                            171.0002(c)(4)?{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="reit_entity"
                            data-placeholder="Select One"
                            className="select select2-hidden-accessible"
                            tabIndex={-1}
                            aria-hidden="true"
                        >
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
                                    aria-labelledby="select2-reit_entity-wp-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-reit_entity-wp-container"
                                        title="No"
                                    >
                                        No
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
                <div className="col-md-4">
                    <div className="form-group">
                        <label>
                            Is this entity a Veteran-Owned Business as defined
                            in the Texas Tax Code Sec. 171.0005?{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="veteran_owned"
                            data-placeholder="Select One"
                            className="select select2-hidden-accessible"
                            tabIndex={-1}
                            aria-hidden="true"
                        >
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
                                    aria-labelledby="select2-veteran_owned-1r-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-veteran_owned-1r-container"
                                        title="No"
                                    >
                                        No
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
                <div className="col-md-4">
                    <div className="form-group">
                        <label>
                            Does this entity own a stake or interest in a
                            separately formed entity in the state of Texas or
                            another state?{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <select
                            name="entity_own_other_entities"
                            data-placeholder="Select One"
                            className="select select2-hidden-accessible"
                            tabIndex={-1}
                            aria-hidden="true"
                        >
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
                                    aria-labelledby="select2-entity_own_other_entities-bu-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-entity_own_other_entities-bu-container"
                                        title="No"
                                    >
                                        No
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
                <div className="col-md-4">
                    <div className="form-group">
                        <label>
                            Accounting Year Begin Date{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="accounting_year_begin_date"
                            placeholder="mm/dd"
                            className="form-control"
                            defaultValue="01/01"
                        />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label>
                            Accounting Year End Date{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            name="accounting_year_end_date"
                            placeholder="mm/dd"
                            className="form-control"
                            defaultValue="12/31"
                        />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label>
                            Total Revenue <span className="text-danger">*</span>
                            <i
                                className="icon-info22 text-muted"
                                data-popup="tooltip"
                                data-placement="top"
                                style={{
                                    fontSize: 12,
                                    marginLeft: 7
                                }}
                                data-original-title="If your total annualized revenue is ABOVE $1,110,000.00, we CANNOT file your report. You will need to consult with your accountant or tax professional for assistance filing your Texas Franchise Tax Report. If your total annualized revenue is BELOW $1,110,000.00, we CAN file your report."
                            />
                        </label>
                        <div className="input-group">
                            <span className="input-group-addon">$</span>
                            <input
                                type="text"
                                name="total_revenue"
                                placeholder="100,000.00"
                                className="form-control"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-12">
                    <h6 className="text-semibold">
                        <code>Business Mailing Address</code>
                    </h6>
                    <p className="text-muted">
                        Enter the current mailing address of the company.
                    </p>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Address:</label>
                        <input
                            type="text"
                            name="mailing_address"
                            placeholder="123 Mailing St"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>City:</label>{" "}
                        <input
                            type="text"
                            name="mailing_city"
                            placeholder="City"
                            className="form-control"
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>State:</label>{" "}
                        <select
                            name="mailing_state"
                            data-placeholder="State"
                            className="select select2-hidden-accessible"
                            tabIndex={-1}
                            aria-hidden="true"
                        >
                            <option />
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
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
                                    aria-labelledby="select2-mailing_state-3w-container"
                                >
                                    <span
                                        className="select2-selection__rendered"
                                        id="select2-mailing_state-3w-container"
                                    >
                                        <span className="select2-selection__placeholder">
                                            State
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
                        <label>Zip Code:</label>
                        <input
                            type="text"
                            name="mailing_zip"
                            placeholder={12345}
                            className="form-control"
                            maxLength={10}
                        />
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-12">
                    <h6 className="text-semibold">
                        <code>Additional Ownership Details</code>
                    </h6>
                    <p className="text-muted">
                        For most of our customers, the following two questions
                        can be left blank. Be sure to read the question
                        carefully however to see if you need to fill this
                        section out.
                    </p>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="text-semibold">
                            Does <u>this entity</u> own 10% or more of another
                            entity? If so, enter information for each
                            corporation, LLC, LP, PA or financial institution,
                            in which
                            <u>this entity</u> owns an interest of 10 percent or
                            more.
                        </label>
                        <input
                            type="text"
                            name="other_entities_owned"
                            placeholder="My Corp Inc (Formation State: Texas, % of Ownership: 15%); My Other Company, LLC (Formation State: Delaware, % of Ownership: 30%)"
                            className="form-control"
                        />
                        <span className="help-block">
                            Separate each with a semicolon ( ; )
                        </span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="text-semibold">
                            Does
                            <u>another entity</u> own 10% or more of this
                            entity? If so, enter information for each
                            corporation, LLC, LP, PA or financial institution,
                            that owns an interest of 10 percent or more of
                            <u>this entity</u>.
                        </label>
                        <input
                            type="text"
                            name="entities_owned_by"
                            placeholder="Another Corp Inc (Formation State: Texas, % of Ownership: 20%); Another Company, LLC (Formation State: Nevada, % of Ownership: 10%)"
                            className="form-control"
                        />
                        <span className="help-block">
                            Separate each with a semicolon ( ; )
                        </span>
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-12">
                    <h6 className="text-semibold">
                        <code>Texas WebFile Number</code>
                    </h6>
                    <p className="text-muted">
                        Please enter your Texas WebFile Tax Number below. Your
                        WebFile number is a 6 digit number beginning with
                        <b>XT</b>
                        000000 or <b>RT</b>
                        000000. If you need assistance obtaining your WebFile
                        number, please visit this link
                        <a
                            href="https://comptroller.texas.gov/taxes/file-pay/about-webfile.php"
                            target="_blank"
                        >
                            https://comptroller.texas.gov/taxes/file-pay/about-webfile.php
                        </a>
                        or call the Texas Comptroller office at 1-800-442-3453.
                        You WebFile was mailed and can be
                        <a
                            href="javascript:;"
                            data-popup="popover"
                            data-html="true"
                            data-original-title="WebFile Number"
                        >
                            located here
                        </a>
                        .
                    </p>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>
                            Texas WebFile Number{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                            <span className="input-group-addon">
                                XT or RT #
                            </span>
                            <input
                                type="text"
                                name="webfile_number"
                                placeholder="XT/RT123456"
                                className="form-control"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TexasAdditionalInformation;
