import { Box, styled, Theme, Typography, Button, Chip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { emptyImageUrl } from "../../constants";
import { JobListType } from "../../context/JobListContextProvider";
import { convertDate } from "../../helpers/convertDate";
import convertMoney from "../../helpers/convertMoney";

export const BoxStyled = styled(Box)(({ theme }: { theme: Theme }) => ({
  border: "1px solid grey",
  padding: "16px",
  backgroundColor: "#FBFBFF",
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
      <Link
        to={`/lowongan/detail/${jobVacancyCode}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Box display="flex" justifyContent="center" mb={4}>
          <img
            src={corporateLogo}
            alt="preview"
            width={"80px"}
            height={"46px"}
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = emptyImageUrl;
              return true;
            }}
          />
        </Box>
        <Typography mb={1} fontSize="16px" fontWeight={700}>
          {corporateName}
        </Typography>
        <Typography fontSize={"14px"} mb={1}>
          {positionName}
        </Typography>
        <Box display="flex" gap={"2px"} flexWrap="wrap" mb={1}>
          <Chip label={status} color="primary" size="small" />
          <Chip
            label={`${convertMoney({ value: salaryFrom })} - ${convertMoney({
              value: salaryTo,
            })}`}
            color="success"
            size="small"
            variant="outlined"
          />
        </Box>
        <Typography textAlign="end" mb={1}>{convertDate({date: new Date(postedDate)})}</Typography>
      </Link>
      <Button
        variant="contained"
        color={applied ? "warning" : "success"}
        fullWidth
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        disabled={applied && type === "sent"}
      >
        {applied ? "BATALKAN LAMARAN" : "KIRIM LAMARAN"}
      </Button>
    </BoxStyled>
  );
};

export default CardJobApplication;
