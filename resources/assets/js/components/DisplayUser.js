// DisplayItem.js

import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import {Button, Modal} from 'react-bootstrap';
import CreateUser from "./CreateUser";
import AlertDismissable from "./AlertDismissable";

class DisplayUser extends Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.state = {users: '', show: false, err: false, err_message:"",editMode: false, id: -1};

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.renderError = this.renderError.bind(this);
        this.cancelError = this.cancelError.bind(this);

    }

    handleClose() {
        this.setState({show: false});
        // Force a render with a simulated state change
        console.log('reredenring')
        this.componentDidMount();
    }

    handleShow(editMode = false, id = -1) {
        this.setState({show: true, editMode: editMode, id: id});
    }

    componentDidMount() {
        axios.get('./users')
            .then(response => {
                this.setState({users: response.data.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {


        if (this.state.users instanceof Array) {

            return this.state.users.map(function (object, i) {
                return <TableRow obj={object} key={i} editCb={this.onEdit} onDelete={this.onDelete}/>;
            }, this)
        }
    }

    onDelete(data, err,err_message) {

        if (err == false) {
            this.setState(prevState => ({
                err: false,
                users: prevState.users.filter(function (item) {
                    return item.id != data
                })
            }))
        }
        else {
            this.setState({err: true,err_message:err_message});

        }
    }


    onEdit(id) {

        this.handleShow(true, id);
    }


    cancelError(){
        this.setState({err: false});
    }
    renderError() {

        if (this.state.err == true) {
            return <AlertDismissable bsStyle="danger" message={this.state.err_message} parentOnDismiss={this.cancelError}></AlertDismissable>;
        }
        return <div/>;

    }

    render() {
        return (
            <div>
                <h1>Users</h1>

                <div className="row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2">
                        {/*<Link to="/create-user">Create User</Link>*/}
                        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                            Create User
                        </Button>
                    </div>
                </div>
                <br/>
                {
                    this.renderError()

                }
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Password</td>
                        <td></td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()}
                    </tbody>


                </table>


                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title> {this.state.editMode == true ? "Edit" : "Create"} User </Modal.Title>

                    </Modal.Header>
                    <Modal.Body>
                        <CreateUser editMode={this.state.editMode} id={this.state.id} callback={this.handleClose}/>
                    </Modal.Body>

                </Modal>


            </div>
        )
    }
}

export default DisplayUser;