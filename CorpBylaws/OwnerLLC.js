import React from "react";

const OwnerLLC = ({ piloted }) => {
    return (
        <div className="ownershipLLC">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="display-block text-semibold">
                            How is your LLC managed?
                        </label>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="managed"
                                id="exampleRadios1"
                                value="member"
                                checked
                            />
                            <label
                                className="form-check-label"
                                htmlFor="managed"
                            >
                                The LLC will be managed by
                                <strong>&nbsp;member(s)</strong>
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="managed"
                                id="managed"
                                value="manager"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="exampleRadios2"
                            >
                                The LLC will be managed by
                                <strong>&nbsp;manager(s)</strong>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="text-semibold">
                            Who are the current Members or Managers of the
                            business?
                        </label>
                        <input
                            type="text"
                            name="managers"
                            placeholder="John Doe; Jane Smith; Acme, LLC; My Corp Inc"
                            className="form-control required"
                            required
                            defaultValue={
                                piloted.managers
                                    .map(manager => manager.full_name)
                                    .join(";") || ""
                            }
                        />
                        <span className="help-block">
                            Separate each Member or Manager with a semicolon ( ;
                            )
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OwnerLLC;
