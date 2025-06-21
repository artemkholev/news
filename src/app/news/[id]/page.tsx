"use client";
import React, { use, useMemo } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { IPost, useNews } from "@/entities/news";

interface PageParams {
  id: string;
}

const NewsItemPage = ({ params }: { params: any }) => {
  const { id } = use<PageParams>(params);
  const { fetchPost } = useNews();
  const [newsItem, setNewsItem] = useState<IPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNewsItem() {
      try {
        const res = await fetchPost(id as string);
        setNewsItem(res);
      } catch (error) {
        console.error("Error fetching news item:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchNewsItem();
  }, [id]);

  const newsDate = useMemo(() => {
    return dayjs(newsItem?.createdAt).format("DD.MM.YYYY");
  }, [newsItem]);

  if (loading) return <div>Загрузка...</div>;
  if (!newsItem) return <div>Новость не найдена</div>;

  return (
    <div className="flex flex-col gap-8">
      {/* Дата */}
      <div className="typography__caption text-blue-7 group-hover:text-base-0">
        {newsDate}
      </div>

      {/* Заголовок */}
      <h1 className="typography__h1 text-base-10">
        {newsItem.title}
      </h1>

      <div className="h-[580px] w-[800px] bg-gray-200 relative !rounded-[32px]">
        {newsItem.imageUrl && (
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + newsItem.imageUrl.slice(1)}
            fill
            className="object-cover"
            alt={newsItem.title}
            unoptimized={true}
            priority={true}
          />
        )}
      </div>

      {/* Краткое содержание */}
      <p className="typography__body text-base-5">
        {newsItem.content}
      </p>
    </div>
  );
};

export default NewsItemPage;
