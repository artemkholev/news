"use client";
import React from "react";
import Image from "next/image";

const NewsCard = () => {
  return (
    <div className="w-[370px] h-[450px] p-2 bg-base-1 hover:bg-blue-700 rounded-xl overflow-hidden hover:shadow-lg duration-300 group">
      <div className="h-48 bg-gray-200 relative rounded-xl">
        <Image
          src="/placeholder-kittens.jpg"
          alt="Котята обворовывают бабушек"
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        {/* Заголовок */}
        <h3 className="typography__h3 text-base-10 mb-3 line-clamp-2 group-hover:text-base-0">
          Котята обворовывают бабушек
        </h3>

        {/* Краткое содержание */}
        <p className="typography__body text-base-5 mb-4 line-clamp-3 group-hover:text-blue-3">
          Много маленьких котят пытались украсть очень много рыбы у бабушек.
        </p>

        {/* Дата */}
        <div className="typography__caption text-blue-7 group-hover:text-base-0">
          12.08.2024
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
