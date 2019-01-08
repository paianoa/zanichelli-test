// CreateItem.js

import React, {Component} from 'react';
import history from '../history'
import {makeStyles} from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import axios from "axios/index";
import AlertDismissable from "./AlertDismissable";


class CreateUser extends Component {


    constructor(props) {
        super(props);
        this.state = {name: '', email: '', password: '',err:false,err_message:""};


        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.onCancelError = this.onCancelError.bind(this);
    }


    componentDidMount() {

        if (this.props.editMode === true) {
            axios.get(`/users/${this.props.id}`)
                .then(response => {
                    this.setState({
                        name: response.data.data.name,
                        email: response.data.data.email,
                        password: response.data.data.password
                    });
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }

    handleChange(e) {
        var newstate = {};
        newstate[e.target.name] = e.target.value;
        this.setState(newstate);

        //ES6: this.setState([e.target.id] = e.target.value);
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    handleSubmit(e) {

        e.preventDefault();
        const users = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        };

        let uri = '/users';
        if (this.props.editMode === true) {
            uri += '/' + this.props.id;
            axios.patch(uri, users).then((response) => {
                if ('callback' in this.props)
                    this.props.callback()

            }).catch( (error)=> {
                this.setState({err:true,err_message:error.message})
            });
        }
        else {

            console.log('post ' + users);
            axios.post(uri, users).then( (response) =>{
                if ('callback' in this.props)
                    this.props.callback()

            }).catch( (error) =>{

                this.setState({err:true,err_message:error.message})
            });;
        }


    }

    onCancelError(){
        this.setState({err:false})
    }
    render() {
        const {email, name, password} = this.state;

        const style = {fontSize: 18};

        return (
            <div>


                {this.state.err == true ? (<AlertDismissable bsStyle="danger" message={this.state.err_message} parentOnDismiss={this.onCancelError}></AlertDismissable>): ("")}


                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >


                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <TextValidator
                                    label="Name"
                                    InputProps={{style}}
                                    InputLabelProps={{style}}
                                    FormHelperTextProps={{style}}
                                    onChange={this.handleChange}
                                    name="name"
                                    value={name}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <TextValidator
                                    InputProps={{style}}
                                    InputLabelProps={{style}}
                                    FormHelperTextProps={{style}}
                                    label="Email"
                                    onChange={this.handleChange}
                                    name="email"
                                    value={email}
                                    validators={['required', 'isEmail']}
                                    errorMessages={['this field is required', 'email is not valid']}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <TextValidator
                                    InputProps={{style}}
                                    InputLabelProps={{style}}
                                    FormHelperTextProps={{style}}
                                    label="Password"
                                    onChange={this.handleChange}
                                    name="password"
                                    value={password}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-6">
                            <Button className="btn btn-primary" style={{fontSize: 20}} type="submit">Submit</Button>
                        </div>
                    </div>

                </ValidatorForm>


            </div>
        )
    }
}

export default CreateUser;