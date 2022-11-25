import React, { useCallback, useContext } from "react";

import { JobListContext } from "../context/JobListContextProvider";
import ListJob from "../modules/commons/ListJob";

const Homepage = () => {
  const { jobList, setJobList } = useContext(JobListContext);

  const handleOnApply = useCallback(
    (index: number) => {
      const newData = [...jobList];
      newData[index].applied = true;
      setJobList(newData);
    },
    [jobList, setJobList]
  );

  if(!jobList.length) return <>Loading</>

  return (
    <ListJob
      jobList={jobList}
      title="Lowongan Pekerjaan"
      onClick={handleOnApply}
      type="sent"
    />
    // <>test</>
  );
};

export default Homepage;
