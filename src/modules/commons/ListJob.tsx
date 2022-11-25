import { Container, Grid } from "@mui/material";
import React from "react";
import CardJobApplication from "../../components/Card/CardJobApplication";
import Title from "../../components/Title/Title";
import { JobListType } from "../../context/JobListContextProvider";

type ListJobProps = {
  jobList?: Array<JobListType>;
  title: string;
  onClick: (index: number, corporateId: string) => void;
  type: "sent" | "withdraw"
};

const ListJob = ({ jobList, title, onClick, type }: ListJobProps) => {
  return (
    <Container>
      <Title textAlign="center" mb={3}>
        {title}
      </Title>
      <Grid container gap={"12px"} justifyContent="center">
        {jobList?.map((job, index) => (
          <Grid item key={job.corporateId} xs={8} sm={5} lg={3}>
            <CardJobApplication {...job} onClick={() => onClick(index, job.corporateId)} type={type} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ListJob;
