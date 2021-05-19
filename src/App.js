import React, { useState } from "react";
import Title from "./components/Title";
import Job from "./components/Job";
import JobButton from "./components/JobButton";
import { data } from "./data";

const App = () => {
  const [index, setIndex] = useState(0);

  const renderJob = (job) => {
    if (job === data[0].companyName) {
      setIndex(0);
    } else if (job === data[1].companyName) {
      setIndex(1);
    } else setIndex(2);
  };

  return (
    <section className="section">
      <Title />
      <div className="jobs-center">
        <JobButton render={renderJob} />
        <Job job={data[index]} />
      </div>
    </section>
  );
};

export default App;
