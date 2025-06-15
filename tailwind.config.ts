import type { Config } from "tailwindcss";

type PluginUtils = {
  addUtilities: (
    utilities: Record<string, Record<string, string>>,
    variants?: string[]
  ) => void;
  theme: (path: string) => unknown;
};

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",
    "./src/entities/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          1: "#EFF6FF",
          2: "#DBEAFE",
          3: "#BFDBFE",
          4: "#93C5FD",
          5: "#60A5FA",
          6: "#3B82F6",
          7: "#2563EB",
          8: "#1D4ED8",
          9: "#1E40AF",
          10: "#1E3A8A",
        },
        base: {
          0: "#FFFFFF",
          1: "#F5F5F5",
          2: "#E5E5E5",
          3: "#D4D4D4",
          4: "#A3A3A3",
          5: "#737373",
          6: "#525252",
          7: "#404040",
          8: "#262626",
          9: "#171717",
          10: "#0A0A0A",
        },
        red: {
          1: "#FEF2F2",
          2: "#FEE2E2",
          3: "#FECACA",
          4: "#FCA5A5",
          5: "#F87171",
          6: "#EF4444",
          7: "#DC2626",
          8: "#B91C1C",
          9: "#991B1B",
          10: "#7F1D1D",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }: PluginUtils) {
      // Тип для типографических утилит
      type TypographyUtility = {
        fontFamily: string;
        fontWeight: string;
        fontSize: string;
        lineHeight: string;
      };

      // Тип для цветовых утилит
      type ColorUtility = {
        backgroundColor?: string;
        color?: string;
        borderColor?: string;
      };

      // Добавляем типографические утилиты
      const typographyUtilities: Record<string, TypographyUtility> = {
        ".web__h1": {
          fontFamily: "Inter",
          fontWeight: "500",
          fontSize: "40px",
          lineHeight: "50px",
        },
        ".web__h2": {
          fontFamily: "Inter",
          fontWeight: "500",
          fontSize: "24px",
          lineHeight: "32px",
        },
        ".web__h3": {
          fontFamily: "Inter",
          fontWeight: "500",
          fontSize: "20px",
          lineHeight: "28px",
        },
        ".web__body": {
          fontFamily: "Inter",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px",
        },
        ".web__caption": {
          fontFamily: "Inter",
          fontWeight: "300",
          fontSize: "14px",
          lineHeight: "20px",
        },
        ".mobile__h1": {
          fontFamily: "Inter",
          fontWeight: "500",
          fontSize: "28px",
          lineHeight: "36px",
        },
        ".mobile__h2": {
          fontFamily: "Inter",
          fontWeight: "500",
          fontSize: "22px",
          lineHeight: "30px",
        },
        ".mobile__h3": {
          fontFamily: "Inter",
          fontWeight: "500",
          fontSize: "18px",
          lineHeight: "26px",
        },
        ".mobile__body": {
          fontFamily: "Inter",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "20px",
        },
        ".mobile__caption": {
          fontFamily: "Inter",
          fontWeight: "300",
          fontSize: "12px",
          lineHeight: "18px",
        },
      };

      addUtilities(typographyUtilities);

      // Явно создаем классы для ваших цветов
      const colorUtilities: Record<string, ColorUtility> = {};
      const colors = theme("colors") as Record<string, Record<string, string>>;

      const createColorUtilities = (
        prefix: string,
        property: keyof ColorUtility
      ) => {
        Object.entries(colors).forEach(([colorName, shades]) => {
          Object.entries(shades).forEach(([shade, value]) => {
            colorUtilities[`.${prefix}-${colorName}-${shade}`] = {
              [property]: value,
            };
          });
        });
      };

      createColorUtilities("bg", "backgroundColor");
      createColorUtilities("text", "color");
      createColorUtilities("border", "borderColor");

      addUtilities(colorUtilities, ["responsive", "hover", "focus"]);
    },
  ],
};

export default config;
