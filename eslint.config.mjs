import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Полное отключение проверки any
      // Настройка для unused expressions
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true, // Разрешаем конструкции типа a || b
          allowTernary: true, // Разрешаем тернарные операторы
          allowTaggedTemplates: true, // Разрешаем тегированные шаблоны
        },
      ],
      "@typescript-eslint/no-unused-vars": "warn",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];

export default eslintConfig;
