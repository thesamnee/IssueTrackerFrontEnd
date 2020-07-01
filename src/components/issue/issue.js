import React from "react";
import { Link } from "react-router-dom";

const Issue = ({ title, desc, status }) => {

  return (
    <div
      className={css}
      data-status={status}
      >
      <p className="issue-title">{title}</p>
      <p className="desc">{desc}</p>
    </div>
  );
};

export default Issue;
