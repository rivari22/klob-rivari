import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useCallback, useContext, useMemo } from "react";
import { useParams } from "react-router-dom";

import { BoxStyled } from "../components/Card/CardJobApplication";
import { emptyImageUrl } from "../constants";
import { JobListContext, JobListType } from "../context/JobListContextProvider";
import { convertDate } from "../helpers/convertDate";
import convertMoney from "../helpers/convertMoney";

const DetailJobApplicationPage = () => {
  const params = useParams();
  const { jobList, setJobList } = useContext(JobListContext);

  const handleOnClick = useCallback(
    (index: number, jobVacancyCode: string) => {
      let newData = [...jobList];
      newData = newData.map((item) => {
        if (item.jobVacancyCode === jobVacancyCode) {
          return { ...item, applied: !item.applied };
        }
        return item;
      });
      setJobList(newData);
    },
    [jobList, setJobList]
  );

  const dataDetail: JobListType | undefined = useMemo(() => {
    const findData = jobList.find((item) => item.jobVacancyCode === params?.id);
    return findData;
  }, [jobList, params?.id]);

  return (
    <Container>
      <BoxStyled>
        <Box display="flex" justifyContent="center" mb={4}>
          <img
            src={dataDetail?.corporateLogo || ""}
            alt="preview"
            width={"180px"}
            height={"120px"}
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = emptyImageUrl;
              return true;
            }}
          />
        </Box>
        <Typography fontSize="16px" fontWeight={700}>
          {dataDetail?.corporateName}
        </Typography>
        <Box>
          <div
            dangerouslySetInnerHTML={{ __html: dataDetail?.descriptions || "" }}
          ></div>
        </Box>
        <Typography>{dataDetail?.positionName}</Typography>
        <Typography>
          Status: <span>{dataDetail?.status}</span>
        </Typography>
        <Typography>
          Gaji:{" "}
          <span>{`${convertMoney({
            value: dataDetail?.salaryFrom || 0,
          })}-${convertMoney({ value: dataDetail?.salaryTo || 0 })}`}</span>
        </Typography>
        <Typography textAlign="end">
          {convertDate({ date: new Date(dataDetail?.postedDate || "") })}
        </Typography>
        <Button
          variant="contained"
          color={dataDetail?.applied ? "warning" : "success"}
          fullWidth
          onClick={() => handleOnClick(0, dataDetail?.jobVacancyCode || "")}
        >
          {dataDetail?.applied ? "BATALKAN LAMARAN" : "KIRIM LAMARAN"}
        </Button>
      </BoxStyled>
    </Container>
  );
};

export default DetailJobApplicationPage;
