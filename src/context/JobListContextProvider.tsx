import React from "react";
import usePersistedState from "../hooks/usePersistedState";

export type JobListType = {
  jobVacancyCode: string;
  positionName: string;
  corporateId: string;
  corporateName: string;
  status: string;
  descriptions: string;
  corporateLogo: string;
  applied: boolean;
  salaryFrom: number;
  salaryTo: number;
  postedDate: string;
};

type JobListContextType = {
  jobList: Array<JobListType>;
  setJobList: React.Dispatch<React.SetStateAction<JobListType[]>>;
};

export const JobListContext = React.createContext<JobListContextType>({
  jobList: [],
  setJobList: () => undefined,
});

const JobList = ({ children }: { children: React.ReactNode }) => {
  const [jobList, setJobList] = usePersistedState("JOB_LIST", "");

  React.useEffect(() => {
    const fetchList = async () => {
      const res = await fetch("https://test-server-klob.onrender.com/fakeJob");
      const data = await res.json();
      setJobList(data);
      console.log(data, "apa ini data di useeffect context");
    };

    if (!jobList || !jobList.length) {
      fetchList();
    }
  }, [jobList, setJobList]);

  console.log("here on context");
  const contextValue = {
    jobList,
    setJobList,
  };

  return (
    <JobListContext.Provider value={contextValue}>
      {children}
    </JobListContext.Provider>
  );
};

export default JobList;
