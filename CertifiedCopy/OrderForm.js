import React from "react";
import { connect } from "react-redux";
import Affirmation from "../global/Affirmation";

class OrderForm extends React.Component {
    constructor(props) {
        super(props);
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
        return <Affirmation />;
    }
}

const mapStateToProps = state => {
    return {
        piloted: state.user.piloted
    };
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
