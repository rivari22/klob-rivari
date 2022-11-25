import styled from "@emotion/styled";
import { Typography, TypographyTypeMap } from "@mui/material";
import React from "react";

const TitleStyled = styled(Typography)(() => ({
  fontSize: "22px",
  fontWeight: 700,
}));

const Title = (props: TypographyTypeMap['props']) => {
  return <TitleStyled {...props} />;
};

export default Title;
