"use client";
import { Box, Typography } from "@mui/material";
import { BasicButton, InputText } from "@/shared/ui";
import { UploadFile } from "@mui/icons-material";
import { useState, useRef, ChangeEvent } from "react";
import Image from "next/image";
import { useNews } from "@/entities/news/model/hooks";

interface AddNewsFormProps {
  close: () => void;
}

interface NewsData {
  title: string;
  text: string;
}

export default function EditNewsForm({ close }: AddNewsFormProps) {
  const { createPost } = useNews();
  const [newsData, setNewsData] = useState<NewsData>({
    title: "",
    text: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewsData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // Создаем превью изображения
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("title", newsData.title);
      formData.append("content", newsData.text);
      if (selectedFile) {
        formData.append("image", selectedFile);
      }

      await createPost(formData);
      close();
    } catch (error) {
      console.error("Ошибка при создании поста:", error);
    }
  };

  return (
    <div className="h-full flex flex-col p-[60px] items-center">
      <h3 className="typography__h2 text-blue-7 mb-9">Редактировать новость</h3>

      <div className="w-full h-full flex flex-col gap-4">
        <InputText
          name="title"
          label="Заголовок"
          placeholder="Введите заголовок новости"
          value={newsData.title}
          onChange={handleChange}
        />

        <InputText
          name="text"
          label="Текст новости"
          multiline
          rows={6}
          placeholder="Введите текст новости"
          value={newsData.text}
          onChange={handleChange}
        />

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: "none" }}
        />

        <Box
          onClick={handleUploadClick}
          sx={{
            border: "1px solid #d4d4d4",
            borderColor: "divider",
            borderRadius: 6,
            p: 4,
            textAlign: "center",
            cursor: "pointer",
            "&:hover": {
              borderColor: "primary.main",
              bgcolor: "action.hover",
            },
          }}
        >
          {previewUrl ? (
            <Image
              src={previewUrl}
              alt="Preview"
              fill
              style={{
                objectFit: "contain",
              }}
              unoptimized={true}
            />
          ) : (
            <UploadFile
              fontSize="large"
              sx={{ mb: 1, color: "text.secondary" }}
            />
          )}
          <Typography variant="body1" color="text.secondary">
            {selectedFile
              ? selectedFile.name
              : "Перетащите файл или нажмите, чтобы выбрать"}
          </Typography>
        </Box>
      </div>

      <div className="w-full flex flex-row gap-4">
        <BasicButton
          className="w-full"
          onClick={close}
          sx={{
            color: "#DC2626",
            backgroundColor: "transparent",
            border: "1px solid #DC2626",
            "&:hover": {
              backgroundColor: "#FEF2F2",
            },
          }}
        >
          Отменить
        </BasicButton>
        <BasicButton
          className="w-full"
          onClick={handleSubmit}
          disabled={!newsData.title || !newsData.text}
        >
          Сохранить
        </BasicButton>
      </div>
    </div>
  );
}
