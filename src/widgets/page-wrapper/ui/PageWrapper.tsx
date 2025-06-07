import React from "react";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { Content } from "@/widgets/content";

interface PageWrapperProps {
  children?: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="page_wrapper">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default PageWrapper;
