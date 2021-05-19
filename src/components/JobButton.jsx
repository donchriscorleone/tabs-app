import React, { useState } from "react";
import { data } from "../data";

const JobButton = ({ render }) => {
  return (
    <div className="btn-container">
      <button className="job-btn " onClick={() => render(data[0].companyName)}>
        {data[0].companyName}
      </button>
      <button
        className="job-btn false"
        onClick={() => render(data[1].companyName)}
      >
        {data[1].companyName}
      </button>
      <button className="job-btn" onClick={() => render(data[2].companyName)}>
        {data[2].companyName}
      </button>
    </div>
  );
};

export default JobButton;
