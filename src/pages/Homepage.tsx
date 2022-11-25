import { Grid, Container } from "@mui/material";
import React, { useContext } from "react";

import CardJobApplication from "../components/Card/CardJobApplication";
import Title from "../components/Title/Title";
import { JobListContext } from "../context/JobListContextProvider";

type HomepageProps = {};

const Homepage = (props: HomepageProps) => {
  const { jobList } = useContext(JobListContext);

  return (
    <Container>
      <Title textAlign="center" mb={3}>Lowongan Pekerjaan:</Title>
      <Grid container gap={"12px"} justifyContent="center">
        {jobList.map((job) => (
          <Grid item key={job.corporateId} xs={8} sm={5} lg={3}>
            <CardJobApplication {...job} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Homepage;
