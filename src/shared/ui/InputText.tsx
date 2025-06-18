import React from "react";
import { TextField } from "@mui/material";
import styled from "@emotion/styled";

interface CustomInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
}

const StyledInput = styled(TextField)`
  & .MuiInputBase-root {
    border-radius: 20px;
    background-color: transperent;
    padding-left: 16px;
    height: 56px;
    font-size: 16px;

    &:hover {
      
    }

    &.Mui-focused {
    }
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: #D4D4D4;
  }

  & .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #000;
  }

  & .MuiInputLabel-root.Mui-focused {
    color: #000;
  }

  width: 100%;
`;

const InputText: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  helperText,
}) => {
  return (
    <StyledInput
      label={label}
      variant="outlined"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      fullWidth
    />
  );
};

export default InputText;