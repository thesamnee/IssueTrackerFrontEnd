import React from "react";

const Issue = ({ title, desc, status }) => {

  return (
    <div className="issue"
      data-status={status}
      >
      <p className="issue-title">{title}</p>
      <p className="desc">{desc}</p>
    </div>
  );
};

export default Issue;
