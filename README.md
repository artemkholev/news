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

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
