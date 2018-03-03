import React, { Component } from "react";
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from "redux";
import Home from "../components/HomeScreen";

class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    addReflection() {
        this.props.addReflection();
    }
    
    render() {
        return <Home {...this.props} />
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch)
}

export default connect((state) => { return {}}, mapDispatchToProps)(AppContainer);