import React from "react";
import { Box, Tab, Tabs as MuiTabs } from "@mui/material";
import Link from "next/link";
import styled from "@emotion/styled";

interface TabItem {
  label: string;
  href: string;
}

interface TabsProps {
  items: TabItem[];
  activeTab: string;
}

const StyledTabs = styled(MuiTabs)`
  & .MuiTabs-indicator {
    display: none;
  }

  & .MuiTabs-flexContainer {
    display: inline-block;
    height: 40px;
    background-color: #f0f0f0;
    border-radius: 20px;
    gap: 0px;
  }
`;

const StyledTab = styled(Tab)`
  padding: 4px 20px;
  min-height: 40px;
  border-radius: 20px;
  color: #000;
  background-color: #f0f0f0;
  font-weight: 400;
  font-size: 16px;
  text-transform: none;
  transition: background-color 0.3s ease;

  &.Mui-selected {
    background-color: #000;
    color: #fff;
  }

  &:hover {
    background-color: #e0e0e0;
  }

  text-decoration: none;
`;

const TabsComponent = ({ items, activeTab }: TabsProps) => {
  return (
    <Box>
      <StyledTabs
        value={activeTab}
        onChange={() => {}}
      >
        {items.map((item) => (
          <StyledTab
            key={item.href}
            label={
              <Link
                href={item.href}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {item.label}
              </Link>
            }
            value={item.href}
          />
        ))}
      </StyledTabs>
    </Box>
  );
};

export default TabsComponent;
