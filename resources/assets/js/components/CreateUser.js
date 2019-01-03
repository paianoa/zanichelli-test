// CreateItem.js

import React, {Component} from 'react';
import { browserHistory } from 'react-router'

class CreateUser extends Component {


    constructor(props){
        super(props);
        this.state = {productName: '', productPrice: ''};

        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange1(e){
        this.setState({
            name: e.target.value
        })
    }
    handleChange2(e){
        this.setState({
            email: e.target.value
        })
    }
    handleChange3(e){
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const users = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }
        let uri = '/users';
        axios.post(uri, users).then((response) => {
             browserHistory.push('/display-user');
        });


    }

    render() {
        return (
            <div>
                <h1>Create An Item</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" className="form-control" onChange={this.handleChange1}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>email:</label>
                                <input type="text" className="form-control col-md-6" onChange={this.handleChange2}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>password:</label>
                                <input type="text" className="form-control col-md-6" onChange={this.handleChange3}/>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <button className="btn btn-primary">Create User</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default CreateUser;