import React from "react";
import { BasicButton } from "@/shared/ui";
import { AppRoutes } from "@/shared/router/router.options";
import Stack from "@mui/material/Stack";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link href={AppRoutes.HOME}>
          <span className="typography__h2 text-blue-7">News for everyone</span>
        </Link>

        <Stack direction="row" spacing={3}>
          <BasicButton>Главная</BasicButton>
          <BasicButton>Контакты</BasicButton>
          <BasicButton>О нас</BasicButton>
        </Stack>

        <Link href={AppRoutes.AUTH_LOGIN}>
          <BasicButton>Админ</BasicButton>
        </Link>
      </div>
    </header>
  );
};

export default Header;
