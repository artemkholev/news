"use client";

import { useState } from "react";
import { BasicButton, InputText } from "@/shared/ui";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-[435px] flex flex-col items-center gap-8  max-w-md mx-auto">
        <h1 className="typography__h1">Вход в админ-панель</h1>

        <form className="w-full flex flex-col gap-4">
          <InputText
            label="Логин"
            placeholder="Введите логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />

          <InputText
            label="Пароль"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <BasicButton className="w-full">Войти</BasicButton>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
