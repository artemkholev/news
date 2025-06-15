import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

const Content: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="content-layout">
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default Content;
