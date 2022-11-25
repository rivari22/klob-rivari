import { Box, styled, Theme, Typography, Link, Button } from "@mui/material";
import React from "react";

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

const BoxStyled = styled(Box)(({ theme }: { theme: Theme }) => ({
  border: "1px solid grey",
  padding: "16px",
  backgroundColor: "white",
  borderRadius: "8px"
}));

type Props = JobListType;

const CardJobApplication = ({
  applied,
  corporateId,
  corporateLogo,
  corporateName,
  descriptions,
  jobVacancyCode,
  positionName,
  postedDate,
  salaryFrom,
  salaryTo,
  status,
}: Props) => {
  return (
    <BoxStyled>
      <Box display="flex" justifyContent="center">
        <img
          src={corporateLogo || ""}
          alt="preview"
          width={"80px"}
          height={"46px"}
        />
      </Box>
      <Typography>{corporateName || "Move Forward"}</Typography>
      <Typography>{positionName || "ADMIN HRD"}</Typography>
      <Typography>
        Status: <span>{positionName || "ADMIN HRD"}</span>
      </Typography>
      <Typography>
        Gaji: <span>{`${salaryFrom} - ${salaryTo}`}</span>
      </Typography>
      <Typography textAlign="end">{postedDate || "01/02/2022"}</Typography>
      {/* // should use LINK REACT ROUTER DOM */}
      <Box>
        <Link href={`/${corporateId}`} target="_blank">
          Baca Detail
        </Link>
      </Box>
      <Button variant="contained" color="success" fullWidth>
        KIRIM LAMARAN
      </Button>
    </BoxStyled>
  );
};

export default CardJobApplication;
