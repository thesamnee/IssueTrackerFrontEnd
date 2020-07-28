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
    onChangeIssueDesc = e => {
        this.setState({
            title: e.target.value
        });
        console.log(this.state.desc)
    };
    onChangeIssueStatus = e => {
        this.setState({
            status: e.target.value
        });
        console.log(this.state.desc)
    };

    onSubmit = e => {
        e.preventDefault();
    
        console.log(`Submitted`);
        console.log(`Title: ${this.state.title}`);
        console.log(`Category: ${this.state.category}`);
        console.log(`Description: ${this.state.description}`);
        console.log(`Time: ${this.state.time}`);
        console.log(`Duration: ${this.state.duration}`);
    
        const newTodo = {
          day: this.state.day,
          title: this.state.title,
          category: this.state.category,
          duration: this.state.duration,
          description: this.state.description,
          time: this.state.time
        };
    
        axios
          .post("http://localhost:4000/todos/add", newTodo)
          .then(res => {
            this.setState({
              day: "",
              title: "",
              category: "",
              description: "",
              time: Number,
              duration: Number
            });
            this.props.history.push("/schedule")
          });
    
        
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