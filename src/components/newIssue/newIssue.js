import React, { Component } from 'react';

class newIssue extends Component {
    state = {
        title: "",
        desc: "",
        status: ""
    }

    onChangeIssueTitle = e => {
        this.setState({
          title: e.target.value
        });
        console.log(this.state.title)
      };

    render() {
        return (
            <div className="formBox">
                <label className="header">Title: </label>
                <input
                    type="text"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChangeIssueTitle}
                />
            </div>

        )
    }

}