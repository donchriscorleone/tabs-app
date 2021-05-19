import React from "react";
import JobButton from "./JobButton";
import JobDescription from "./JobDescription";

const Job = ({ job }) => {
  return (
    <article className="job-info">
      <h3>{job.role}</h3>
      <h4>{job.companyName}</h4>
      <p className="job-date">{job.timeline}</p>
      {job.jobDescriptions.map((j) => {
        return <JobDescription jobDescription={j} key={j.id} />;
      })}
    </article>
  );
};

export default Job;
