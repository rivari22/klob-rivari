import { Button, Grid } from "@mui/material";
import React, { useCallback, useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title/Title";
import { JobListContext } from "../context/JobListContextProvider";
import ListJob from "../modules/commons/ListJob";

const JobApplicationSentPage = () => {
  const { jobList, setJobList } = useContext(JobListContext);

  const handleOnWithdraw = useCallback(
    (index: number, jobVacancyCode: string) => {
      let newData = [...jobList];
      newData = newData.map((item) => {
        if (item.jobVacancyCode === jobVacancyCode) {
          return { ...item, applied: false };
        }
        return item;
      });
      setJobList(newData);
    },
    [jobList, setJobList]
  );

  const sentJobList = useMemo(() => {
    const temp = jobList.filter((job) => job.applied);
    return temp;
  }, [jobList]);

  if (!jobList.length) return <>Loading</>;

  return (
    <>
      {!sentJobList?.length ? (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Title>Belum ada lamaran yang terkirim</Title>
          <Button variant="contained">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Kembali ke home
            </Link>
          </Button>
        </Grid>
      ) : (
        <ListJob
          jobList={sentJobList}
          title="Lamaran Terkirim"
          onClick={handleOnWithdraw}
          type="withdraw"
        />
      )}
    </>
  );
};

export default JobApplicationSentPage;
