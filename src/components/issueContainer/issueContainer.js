import React, { Component } from "react";
import Issue from "./../issue/issue.js";
import "./issueContainer.css";

// import axios from 'axios';

class issueContainer extends Component {
  state = {
    issues: [
      {
        "title":"placeholder issue",
        "desc":"this is placeholder",
        "status":"new"
      }
    ]
  };
  
  componentDidMount(){
    //Add Axios call to get issues from API
  }
  
  render() {
    return (
      <div className="issueContainer">
        <div className="issueStatus" status="new">
          <h2 className="statusHeader">New</h2>
          {this.state.issues
            .filter(issues => issues.status === "new")
            .map(issues => (
              <Issue
                status={issues.status}
                title={issues.title}
                desc={issues.desc}  
              />
            ))}
        </div>
        <div className="issueStatus" status="inProgress">
          <h2 className="statusHeader">In Progress</h2>
          {this.state.issues
            .filter(issues => issues.status === "inProgress")
            .map(issues => (
              <Issue
              status={issues.status}
              title={issues.title}
              desc={issues.desc}
              />
              ))}
        </div>
        <div className="issueStatus" status="complete">
          <h2 className="statusHeader">Complete</h2>
          {this.state.issues
            .filter(issues => issues.status === "complete")
            .map(issues => (
              <Issue
                status={issues.status}
                title={issues.title}
                desc={issues.desc}
                />
                ))}
        </div>
        <div className="issueStatus" status="noAction">
          <h2 className="statusHeader">No Action Needed</h2>
          {this.state.issues
            .filter(issues => issues.status === "noAction")
            .map(issues => (
              <Issue
              status={issues.status}
              title={issues.title}
              desc={issues.desc}
                />
                ))}
        </div>
        </div>
    );
  }
}

export default issueContainer;
