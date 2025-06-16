"use client";
import React from "react";
import { BasicButton } from "@/shared/ui";

const HomePage: React.FC = () => {
  return (
    <div className="h-full flex flex-col gap-8 items-center">
      <h1 className="typography__h1 ">Последние новости</h1>
      <div className="h-full">news</div>
      <div className="p-8">
        <BasicButton>Загрузить ещё</BasicButton>
      </div>
    </div>
  );
};

export default HomePage;
