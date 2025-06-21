"use client";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const BasicButton = styled(Button)(() => ({
  textTransform: "none",
  color: "#fff",
  backgroundColor: "#2563EB",
  fontSize: "1rem",
  fontWeight: 400,
  padding: "4px 20px",
  minWidth: "auto",
  minHeight: "40px",
  borderRadius: "32px",
  "&:hover": {
    backgroundColor: "#3B82F6",
  },
  "&.Mui-disabled": {
    color: "#fff",
    backgroundColor: "#93C5FD",
    opacity: 0.7,
  },
}));

export default BasicButton;
