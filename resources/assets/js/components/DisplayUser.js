// DisplayItem.js

import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import TableRow from './TableRow';



class DisplayUser extends Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.state = { users: '', show:false};

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);


    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    componentDidMount(){
        axios.get('./users')
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow(){


        if(this.state.users instanceof Array){

            return this.state.users.map(function(object, i){
                return <TableRow obj={object} key={i}  onDelete={this.onDelete}/>;
            },this)
        }
    }

    onDelete(data){
        console.log('on delete called '+ data);
        this.setState(prevState => ({
            users: prevState.users.filter(function(item){ return item.id != data})
        }))
        console.log('after delete called '+ data);
    }

    render(){
        return (
            <div>
                <h1>Users</h1>

                <div className="row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2">
                        <Link to="/create-user">Create User</Link>
                    </div>
                </div><br />

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


            </div>
        )
    }
}
export default DisplayUser;