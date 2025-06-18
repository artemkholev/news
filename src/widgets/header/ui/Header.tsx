import React from "react";
import { usePathname } from "next/navigation";
import { BasicButton, TabsComponent } from "@/shared/ui";
import { AppRoutes } from "@/shared/router/router.options";
import Link from "next/link";

const Header: React.FC = () => {
  const pathname = usePathname();

  const tabsData = [
    { label: "Главная", href: AppRoutes.HOME },
    { label: "О нас", href: AppRoutes.ABOUT },
    { label: "Контакты", href: AppRoutes.CONTACTS },
  ];

  return (
    <header className="header">
      <div className="header__container">
        <Link href={AppRoutes.HOME}>
          <span className="typography__h2 text-blue-7">News for everyone</span>
        </Link>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <TabsComponent items={tabsData} activeTab={pathname} />
        </div>

        <Link href={AppRoutes.AUTH_LOGIN}>
          <BasicButton>Админ</BasicButton>
        </Link>
      </div>
    </header>
  );
};

export default Header;
