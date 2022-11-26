import { Box, styled, Theme, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { JobListType } from "../../context/JobListContextProvider";

export const BoxStyled = styled(Box)(({ theme }: { theme: Theme }) => ({
  border: "1px solid grey",
  padding: "16px",
  backgroundColor: "white",
  borderRadius: "8px",
}));

type Props = JobListType & {
  type: "sent" | "withdraw";
  onClick: () => void;
};

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
  onClick,
  type,
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
      <Typography>{corporateName}</Typography>
      <Typography>{positionName}</Typography>
      <Typography>
        Status: <span>{status}</span>
      </Typography>
      <Typography>
        Gaji: <span>{`${salaryFrom} - ${salaryTo}`}</span>
      </Typography>
      <Typography textAlign="end">{postedDate || "01/02/2022"}</Typography>
      <Box>
        <Link to={`/lowongan/detail/${jobVacancyCode}`}>Baca Detail</Link>
      </Box>
      <Button
        variant="contained"
        color={applied ? "warning" : "success"}
        fullWidth
        onClick={onClick}
        disabled={applied && type === "sent"}
      >
        {applied ? "BATALKAN LAMARAN" : "KIRIM LAMARAN"}
      </Button>
    </BoxStyled>
  );
};

export default CardJobApplication;
