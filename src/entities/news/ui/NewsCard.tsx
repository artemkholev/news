"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { AppRoutes } from "@/shared/router/router.options";

interface NewsCardProps {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  date: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  content,
  imageUrl,
  date,
}) => {
  const router = useRouter();

  const newsDate = useMemo(() => {
    return dayjs(date).format("DD.MM.YYYY");
  }, [date]);

  const handleCardClick = () => {
    router.push(AppRoutes.NEWS_ITEM.replace(":id", id));
  };

  return (
    <div
      className="w-[370px] h-[450px] p-2 bg-base-1 hover:bg-blue-700 rounded-xl overflow-hidden hover:shadow-lg duration-300 group"
      onClick={handleCardClick}
    >
      <div className="h-[270px] bg-gray-200 relative rounded-xl">
        {imageUrl && (
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + imageUrl.slice(1)}
            fill
            className="object-cover"
            alt={title}
            unoptimized={true}
            priority={true}
          />
        )}
      </div>

      <div className="p-2">
        <div className="p-2">
          {/* Заголовок */}
          <h3 className="typography__h3 text-base-10 mb-3 line-clamp-2 group-hover:text-base-0">
            {title}
          </h3>

          {/* Краткое содержание */}
          <p className="typography__body line-clamp-2 text-base-5 mb-4 group-hover:text-blue-3">
            {content}
          </p>

          {/* Дата */}
          <div className="typography__caption text-blue-7 group-hover:text-base-0">
            {newsDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
