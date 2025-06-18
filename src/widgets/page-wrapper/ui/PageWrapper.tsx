import React from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { Content } from "@/widgets/content";
import { BasicButton } from "@/shared/ui";
import { AppRoutes } from "@/shared/router/router.options";
import Link from "next/link";

interface PageWrapperProps {
  children?: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const pathname = usePathname();
  const isAuthRoute = pathname?.startsWith("/auth");

  return (
    <div className="page_wrapper">
      {!isAuthRoute ? (
        <Header />
      ) : (
        <div>
          <header className="header">
            <div className="header__container">
              <Link href={AppRoutes.HOME}>
                <BasicButton>Назад</BasicButton>
              </Link>
            </div>
          </header>
        </div>
      )}
      <Content>{children}</Content>
      {!isAuthRoute && <Footer />}
    </div>
  );
};

export default PageWrapper;
