import React from "react";

const OwnerManagement = ({ piloted }) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="text-semibold">
                            Who are the current Directors of the corporation?
                        </label>
                        <input
                            type="text"
                            name="directors"
                            placeholder="John Doe; Jane Smith; Acme, LLC; My Corp Inc"
                            className="form-control"
                            required
                            defaultValue={
                                piloted.managers
                                    .map(manager => manager.full_name)
                                    .join(";") || ""
                            }
                        />
                        <span className="help-block">
                            Separate each Director with a semicolon ( ; )
                        </span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="text-semibold">
                            Who are the current Officers of the corporation?
                            {piloted.type == "Non Profit" &&
                                piloted.state == "Washington" && (
                                    <WashingtonNonProfits />
                                )}
                        </label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>President:</label>
                        <input
                            type="text"
                            name="president"
                            placeholder="President"
                            className="form-control"
                            required
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Treasurer:</label>
                        <input
                            type="text"
                            name="treasurer"
                            placeholder="Treasurer"
                            className="form-control"
                            required
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Secretary:</label>
                        <input
                            type="text"
                            name="secretary"
                            placeholder="Secretary"
                            className="form-control"
                            required
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>
                            Vice President:
                            <span className="text-muted">(optional)</span>
                        </label>
                        <input
                            type="text"
                            name="vice_president"
                            placeholder="Vice President"
                            className="form-control"
                            required
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OwnerManagement;
