import React, {Component} from 'react';
import {Alert} from 'react-bootstrap';


class AlertDismissable extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);

        this.state = {
            show: true
        };
    }

    handleDismiss() {
        this.setState({ show: false });
        this.props.parentOnDismiss();
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        if (this.state.show) {
            return (
                <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
                    <strong>Error: </strong> {this.props.message}
                </Alert>
            );
        }
        return null;


    }
}


export default AlertDismissable;