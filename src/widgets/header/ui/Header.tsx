"use client";
import { usePathname } from "next/navigation";
import { BasicButton, TabsComponent } from "@/shared/ui";
import { AppRoutes } from "@/shared/router/router.options";
import Link from "next/link";
import { useAuth } from "@/features/auth";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const pathname = usePathname();
  const { logout, accessToken } = useAuth();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const tabsData = [
    { label: "Главная", href: AppRoutes.HOME },
    { label: "О нас", href: AppRoutes.ABOUT },
    { label: "Контакты", href: AppRoutes.CONTACTS },
  ];

  const handleAddNewsClick = () => {
    const event = new CustomEvent("openAddNewsDialog");
    window.dispatchEvent(event);
  };

  const isNewsDetailPage = pathname.startsWith("/news/");

  if (!isClient) {
    return (
      <header className="header">
        <div className="header__container">
          <span className="typography__h2 text-blue-7">News for everyone</span>
        </div>
      </header>
    );
  }

  return (
    <header className="header">
      <div className="header__container">
        {accessToken ? (
          <>
            <BasicButton onClick={() => logout()}>
              Режим пользователя
            </BasicButton>

            <span className="typography__h2 text-blue-7">
              News for everyone
            </span>

            <BasicButton onClick={handleAddNewsClick}>
              Добавить новость
            </BasicButton>
          </>
        ) : (
          <>
            {isNewsDetailPage && (
              <Link href={AppRoutes.HOME}>
                <BasicButton>Назад к ленте</BasicButton>
              </Link>
            )}

            <Link href={AppRoutes.HOME}>
              <span className="typography__h2 text-blue-7">
                News for everyone
              </span>
            </Link>

            {!isNewsDetailPage && (
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <TabsComponent items={tabsData} activeTab={pathname} />
              </div>
            )}

            <Link href={AppRoutes.AUTH_LOGIN}>
              <BasicButton>Админ</BasicButton>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
