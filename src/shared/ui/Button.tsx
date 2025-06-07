import React, { forwardRef } from "react";
import { motion, type MotionProps } from "framer-motion";

type ButtonVariant = "solid" | "outline" | "ghost" | "gradient" | "link";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends MotionProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  to?: string;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    variant = "solid",
    size = "md",
    leftIcon,
    rightIcon,
    onClick,
    className = "",
    disabled = false,
    fullWidth = false,
    type = "button",
    ...rest
  } = props;

  // Базовые классы для кнопки
  const baseClasses = `inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 ${
    fullWidth ? "w-full" : ""
  }`;

  // Классы для размеров
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Классы для вариантов
  const variantClasses = {
    solid: `bg-pink-600 text-white hover:bg-pink-700 ${
      disabled ? "bg-gray-400 hover:bg-gray-400" : ""
    }`,
    outline: `border border-pink-600 text-pink-600 hover:bg-pink-50 ${
      disabled ? "border-gray-400 text-gray-400 hover:bg-transparent" : ""
    }`,
    ghost: `text-pink-600 hover:bg-pink-50 ${
      disabled ? "text-gray-400 hover:bg-transparent" : ""
    }`,
    gradient: `bg-gradient-to-r from-orange-500 to-pink-600 text-white hover:from-orange-600 hover:to-pink-700 ${
      disabled
        ? "from-gray-400 to-gray-500 hover:from-gray-400 hover:to-gray-500"
        : ""
    }`,
    link: `text-pink-600 hover:underline p-0 ${
      disabled ? "text-gray-400 hover:no-underline" : ""
    }`,
  };

  // Иконки с отступами
  const iconClasses = "flex-shrink-0";
  const leftIconWithMargin = leftIcon && (
    <span className={`${iconClasses} mr-2`}>{leftIcon}</span>
  );
  const rightIconWithMargin = rightIcon && (
    <span className={`${iconClasses} ml-2`}>{rightIcon}</span>
  );

  return (
    <motion.button
      ref={ref}
      type={type}
      whileHover={!disabled ? { scale: 1.03 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {leftIconWithMargin}
      {children}
      {rightIconWithMargin}
    </motion.button>
  );
});

Button.displayName = "Button";

export default Button;
