import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import './newIssue.css';


class NewIssue extends Component {
    state = {
        title: "",
        desc: "",
        status: ""
    }

    onChangeIssueTitle = e => {
        this.setState({
            title: e.target.value
        });
    };
    onChangeIssueDesc = e => {
        this.setState({
            desc: e.target.value
        });
    };
    onChangeIssueStatus = e => {
        this.setState({
            status: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();

        console.log(`Submitted`);
        console.log(`Title: ${this.state.title}`);
        console.log(`Description: ${this.state.desc}`);
        console.log(`Status: ${this.state.status}`);

        const newIssue = {
            title: this.state.title,
            desc: this.state.desc,
            status: this.state.status
        };

        axios
            .post("http://localhost:4000/issues/add", newIssue)
            .then(res => {
                this.setState({
                    title: "",
                    desc: "",
                    status: ""
                });
                this.props.history.push("/")
            });


    };

    render() {
        return (
            <div className="formBox">
                <label className="formLabel">Title: </label>
                <input
                    type="text"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChangeIssueTitle}
                />
                <br/>
                <label className="formLabel">Desc: </label>
                <input
                    type="text"
                    className="form-control"
                    value={this.state.desc}
                    onChange={this.onChangeIssueDesc}
                />
                <br/>
                <label className="formLabel">Status: </label>
                <select
                    value={this.state.day}
                    onChange={this.onChangeIssueStatus}
                    className="form-control"
                >
                    <option selected>Please select an option</option>
                    <option value="new">New</option>
                    <option value="inProgress">In Progress</option>
                    <option value="complete">Complete</option>
                    <option value="noAction">No Action Required</option>
                </select>
                <br/>
                <button type="submit" className="submitBtn" onClick={this.onSubmit}>
                    <Link to="/">
                        Create Issue
                    </Link>
                </button>
            </div>

        )
    }

}
export default NewIssue;