# News Website

Проект представляет собой простую новостную платформу с двумя интерфейсами: пользовательским и административным. Сайт современный, минималистичный, удобный для чтения и управления контентом.

## Основные особенности

### Пользовательский интерфейс
- **Главная страница**:
  - Логотип (название сайта).
  - Главное меню с разделами: "Главная", "О нас", "Контакты".
  - Лента новостей в виде карточек с заголовками, кратким описанием и превью фото.
  - При наведении на карточку появляется легкий эффект (например, тень или изменение цвета).
  - Пагинация или кнопка "Загрузить еще".
  - Footer с ссылками на соцсети и контакты.
  
- **Страница полной новости**:
  - Заголовок новости.
  - Дата публикации.
  - Основное изображение (если есть).
  - Полный текст новости.
  - Кнопка "Назад к ленте".

### Админ-панель
- **Форма входа**:
  - Логин/пароль для авторизации в админке.
  
- **Панель управления**:
  - Список новостей с кнопками "Редактировать", "Удалить".
  - Кнопка "Добавить новость".
  
- **Форма добавления/редактирования новости**:
  - Поле "Заголовок".
  - Поле "Краткое описание".
  - Поле "Полный текст".
  - Загрузка изображения.
  - Дата публикации.
  - Кнопки "Сохранить" и "Отменить".

### Дизайн
- Минималистичное использование цветов.
- Адаптивность для ПК и мобильных устройств.
- Темная тема не реализована.
- Шрифты минимальны, используем только необходимые.

### Используемые технологии
- **Библиотека компонентов**: [Material-UI](https://mui.com/material-ui/getting-started/).
  
### Установка и запуск проекта
1. Клонируйте репозиторий:
   ```bash
   git clone <url-репозитория>

his is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
