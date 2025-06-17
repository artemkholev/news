"use client";
import React from "react";
import { BasicButton } from "@/shared/ui";
import { NewsCard } from "@/entities/news";

const HomePage: React.FC = () => {
  const news = [
    { id: 1, title: "Новость 1", content: "Содержание новости 1" },
    { id: 2, title: "Новость 2", content: "Содержание новости 2" },
    { id: 3, title: "Новость 3", content: "Содержание новости 3" },
    { id: 4, title: "Новость 4", content: "Содержание новости 4" },
    { id: 5, title: "Новость 5", content: "Содержание новости 5" },
    { id: 6, title: "Новость 6", content: "Содержание новости 6" },
  ];

  return (
    <div className="h-full flex flex-col gap-8 items-center">
      <h1 className="typography__h1 ">Последние новости</h1>
      <div className="h-full">
        {/* Сетка новостей */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {news.map((item) => (
            <NewsCard key={item.id} />
          ))}
        </div>
      </div>
      <div className="p-8">
        <BasicButton>Загрузить ещё</BasicButton>
      </div>
    </div>
  );
};

export default HomePage;
