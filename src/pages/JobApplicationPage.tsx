import React, { useContext } from "react";
import { JobListContext } from "../context/JobListContextProvider";

type JobApplicationProps = {};

const JobApplication = (props: JobApplicationProps) => {
  const { jobList } = useContext(JobListContext);
  console.log(jobList, "job application here");
  return <div>JobApplication</div>;
};

export default JobApplication;
