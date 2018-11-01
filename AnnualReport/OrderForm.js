import React from "react";
import { connect } from "react-redux";
import {
    IowaAdditionalInformation,
    ArkansasAdditionalInformation,
    ArizonaAdditionalInformation,
    DelawareAdditionalInformation,
    FloridaAdditionalInformation,
    KansasAdditionalInformation,
    MassachusettsAdditionalInformation,
    MississippiAdditionalInformation,
    IllinoisAdditionalInformation,
    NewJerseyAdditionalInformation,
    TexasAdditionalInformation,
    WashingtonAdditionalInformation,
    VirginiaAdditionalInformation,
    MinnesotaAdditionalInformation,
    NevadaAdditionalInformation,
    KentuckyAdditionalInformation,
    WisconsinAdditionalInformation,
    BusinessDescription
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
                <br />
                <RegisteredAgent piloted={this.props.piloted} />
                <br />
                {this.props.piloted.type == "LLC" && (
                    <OwnerLLC piloted={this.props.piloted} />
                )}
                {this.props.piloted.type != "LLC" && (
                    <OwnerManagement piloted={this.props.piloted} />
                )}
                <br />
                <BusinessDescription />
                {this.props.piloted.state == "Arkansas" && (
                    <ArkansasAdditionalInformation
                        piloted={this.props.piloted}
                    />
                )}
                {this.props.piloted.state == "Arizona" && (
                    <ArizonaAdditionalInformation />
                )}
                {this.props.piloted.state == "Delaware" && (
                    <DelawareAdditionalInformation />
                )}
                {this.props.piloted.state == "Florida" && (
                    <FloridaAdditionalInformation />
                )}
                {this.props.piloted.state == "Kansas" && (
                    <KansasAdditionalInformation />
                )}

                {this.props.piloted.state == "Massachusetts" && (
                    <MassachusettsAdditionalInformation />
                )}
                {this.props.piloted.state == "Mississippi" && (
                    <MississippiAdditionalInformation />
                )}
                {this.props.piloted.state == "Illinois" && (
                    <IllinoisAdditionalInformation />
                )}
                {this.props.piloted.state == "New Jersey" && (
                    <NewJerseyAdditionalInformation />
                )}
                {this.props.piloted.state == "Texas" && (
                    <TexasAdditionalInformation />
                )}
                {this.props.piloted.state == "Washington" && (
                    <WashingtonAdditionalInformation />
                )}
                {this.props.piloted.state == "Virginia" && (
                    <VirginiaAdditionalInformation />
                )}
                {this.props.piloted.state == "Virginia" && (
                    <IowaAdditionalInformation />
                )}
                {this.props.piloted.state == "Minnesota" && (
                    <MinnesotaAdditionalInformation />
                )}
                {this.props.piloted.state == "Nevada" && (
                    <NevadaAdditionalInformation />
                )}
                {this.props.piloted.state == "Kentucky" && (
                    <KentuckyAdditionalInformation />
                )}
                {this.props.piloted.state == "Wisconsin" && (
                    <WisconsinAdditionalInformation />
                )}
                <br />
                <Affirmation />
            </form>
        );
    }
}

const mapStateToProps = state => {
    return { piloted: state.user.piloted };
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
