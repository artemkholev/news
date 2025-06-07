import React from "react";

interface SelectOption {
  value: string;
  name: string;
}

interface SelectElemProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  className?: string;
}

export const Select: React.FC<SelectElemProps> = ({
  value,
  onChange,
  options,
  className = "selectElem",
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select value={value} onChange={handleChange} className={className}>
      <option disabled value="">
        Выберите сортировку
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
