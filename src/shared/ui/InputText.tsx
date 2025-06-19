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
  name?: string;
  type?: string;
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
    border-color: #d4d4d4;
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
  name,
  type = "text", // Значение по умолчанию
}) => {
  return (
    <StyledInput
      name={name} // Передаем name
      type={type} // Передаем type
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
