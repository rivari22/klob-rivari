import React, { useCallback, useContext, useMemo } from "react";
import { JobListContext } from "../context/JobListContextProvider";
import ListJob from "../modules/commons/ListJob";

const JobApplicationSentPage = () => {
  const { jobList, setJobList } = useContext(JobListContext);

  const handleOnWithdraw = useCallback(
    (index: number, corporateId: string) => {
      let newData = [...jobList];
      newData = newData.map((item) => {
        if (item.corporateId === corporateId) {
          return { ...item, applied: false };
        }
        return item;
      });
      setJobList(newData)
    },
    [jobList, setJobList]
  );

  const sentJobList = useMemo(() => {
    const temp = jobList.filter((job) => job.applied);
    return temp;
  }, [jobList]);

  if(!jobList.length) return <>Loading</>

  return (
    <ListJob
      jobList={sentJobList}
      title="Lamaran Terkirim"
      onClick={handleOnWithdraw}
      type="withdraw"
    />
  );
};

export default JobApplicationSentPage;
