import React from "react";
import { TextField } from "@mui/material";
import styled from "@emotion/styled";

interface CustomInputProps {
  label?: string;
  placeholder?: string;
  rows?: string | number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  name?: string;
  type?: string;
  multiline?: boolean;
  disableAutocomplete?: boolean;
}

const StyledInput = styled(TextField)`
  & .MuiInputBase-root {
    border-radius: 20px;
    background-color: transperent;
    padding-left: 16px;
    font-size: 16px;

    &:hover {
    }

    &.Mui-focused {
    }
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: #2563eb;
    border-width: 1px;
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: #d4d4d4;
  }

  & .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #2563eb;
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
  name,
  rows,
  type = "text",
  multiline = false,
  disableAutocomplete = true,
}) => {
  return (
    <StyledInput
      name={name}
      type={type}
      rows={rows}
      multiline={multiline}
      label={label}
      variant="outlined"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      autoComplete={disableAutocomplete ? 'off' : 'on'}
      fullWidth
    />
  );
};

export default InputText;
