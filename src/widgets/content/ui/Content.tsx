import React from "react";
import { Breadcrumbs } from "@/shared/ui";

interface LayoutProps {
  children?: React.ReactNode;
}

const Content: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="content-layout bg-gray-50 min-h-screen flex">
      <main className="content flex-1 transition-all duration-300 ml-0 md:ml-64 p-4 md:p-8">
        <Breadcrumbs />
        <div className="content-children bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100 animate-fadeIn">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Content;
