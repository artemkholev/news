"use client";

import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { UploadFile } from "@mui/icons-material";

export default function AddNewsWidget() {
  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 3,
        bgcolor: "background.paper",
        borderRadius: 2,
      }}
    >
      {/* Заголовок формы */}
      <Typography variant="h5" component="h1" gutterBottom sx={{ mb: 3 }}>
        Добавить новость
      </Typography>

      {/* Поле заголовка */}
      <Typography variant="subtitle1" component="h2" gutterBottom>
        Заголовок
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Введите заголовок новости"
        sx={{ mb: 3 }}
      />

      {/* Поле краткого описания */}
      <TextField
        fullWidth
        multiline
        rows={2}
        variant="outlined"
        placeholder="Краткое описание"
        sx={{ mb: 3 }}
      />

      {/* Поле основного текста */}
      <TextField
        fullWidth
        multiline
        rows={6}
        variant="outlined"
        placeholder="Текст новости"
        sx={{ mb: 3 }}
      />

      <Divider sx={{ my: 3 }} />

      {/* Дата публикации */}
      <Typography
        variant="subtitle1"
        component="h2"
        gutterBottom
        sx={{ mb: 2 }}
      >
        Дата публикации
      </Typography>
      <DatePicker sx={{ width: "100%", mb: 3 }} />

      {/* Загрузка файла */}
      <Box
        sx={{
          border: "1px dashed",
          borderColor: "divider",
          borderRadius: 1,
          p: 4,
          textAlign: "center",
          mb: 3,
          cursor: "pointer",
          "&:hover": {
            borderColor: "primary.main",
            bgcolor: "action.hover",
          },
        }}
      >
        <UploadFile fontSize="large" sx={{ mb: 1, color: "text.secondary" }} />
        <Typography variant="body1" color="text.secondary">
          Перетащите файл или нажмите, чтобы выбрать
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Кнопки действий */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
        <Button variant="outlined" color="inherit">
          Отменить
        </Button>
        <Button variant="contained" color="primary">
          Опубликовать
        </Button>
      </Box>
    </Box>
  );
}
