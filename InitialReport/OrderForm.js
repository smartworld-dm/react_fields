import React from "react";
import { connect } from "react-redux";
import {
    WashingtonNonProfits,
    CaliforniaAdditionalInformation,
    NevadaAdditionalInformation,
    WashingtonAdditionalInformation
} from "./";
import {
    Affirmation,
    RegisteredAgent,
    OwnerManagement,
    OwnerLLC
} from "../global/";

class OrderForm extends React.Component {
    constructor(props) {
        super(props);
        this.beforeNext = this.beforeNext.bind(this);
    }
    beforeNext(props) {
        let name = props.name;
        $("#" + name)[0].reportValidity();

        return $("#" + name)[0].checkValidity();
    }
    componentWillUnmount() {
        let data = {};
        $("#" + this.props.name)
            .serializeArray()
            .forEach(item => {
                data[item.name] = item.value;
            });
        this.props.dispatch({
            type: "UPDATE_ORDER",
            data: { information: data }
        });
    }
    render() {
        return (
            <form id={this.props.name} className="p-4">
                <div className="row">
                    <div className="col-md-12">
                        <h6 className="text-semibold">
                            <code>Registered Agent Information</code>
                        </h6>
                        <p className="text-muted">
                            Enter the current legal Registered Agent of the
                            company.
                        </p>
                    </div>
                </div>
                <br />
                <RegisteredAgent piloted={this.props.piloted} />
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <h6 className="text-semibold">
                            <code>Ownership &amp; Management</code>
                        </h6>
                        <p className="text-muted">
                            Please list all members, managers, officers and
                            directors of the company.
                        </p>
                    </div>
                </div>
                <br />
                {this.props.piloted.type == "LLC" && (
                    <OwnerLLC piloted={this.props.piloted} />
                )}
                {this.props.piloted.type != "LLC" && (
                    <OwnerManagement piloted={this.props.piloted} />
                )}
                {this.props.piloted.formation_state == "California" && (
                    <CaliforniaAdditionalInformation
                        piloted={this.props.piloted}
                    />
                )}
                {this.props.piloted.formation_state == "Nevada" && (
                    <NevadaAdditionalInformation />
                )}
                {this.props.piloted.formation_state == "Washington" && (
                    <WashingtonAdditionalInformation
                        piloted={this.props.piloted}
                    />
                )}
                <Affirmation />
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderForm);
