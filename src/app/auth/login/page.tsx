"use client";

import { useState } from "react";
import { BasicButton, InputText } from "@/shared/ui";
import { useAuth } from "@/features/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { AppRoutes } from "@/shared/router/router.options";

const LoginPage = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(loginData.login, loginData.password);
      toast.success("Успешный вход в систему");
      router.push(AppRoutes.HOME);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Ошибка входа");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-[435px] flex flex-col items-center gap-8 max-w-md mx-auto">
        <h1 className="typography__h1">Вход в админ-панель</h1>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <InputText
            name="login"
            label="Логин"
            placeholder="Введите логин"
            value={loginData.login}
            onChange={handleChange}
          />

          <InputText
            name="password"
            label="Пароль"
            placeholder="Введите пароль"
            value={loginData.password}
            onChange={handleChange}
          />

          <BasicButton type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Вход..." : "Войти"}
          </BasicButton>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
