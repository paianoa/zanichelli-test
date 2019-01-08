// TableRow.js

import React, {Component} from 'react';
import {Button} from 'react-bootstrap';


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let uri = `users/${this.props.obj.id}`;
        axios.delete(uri).then( (response) => {
            this.props.onDelete(this.props.obj.id,false,"");
        }).catch((error)=> {
            this.props.onDelete(this.props.obj.id,true, error.message ? error.message : "");
            console.log("errr " + error);
        });
    }


    handleEdit() {
        this.props.editCb(this.props.obj.id)

    }


    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.password}
                </td>
                <td>
                    {/*<Link to={"edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>*/}
                    <Button onClick={this.handleEdit} className="btn btn-primary">Edit</Button>
                </td>
                <td>
                    <form onSubmit={this.handleSubmit}>
                        <input type="submit" value="Delete" className="btn btn-danger"/>
                    </form>
                </td>
            </tr>
        );
    }
}

export default TableRow;