"use client";

const TOKEN_KEY = "auth_token";

export const getToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(TOKEN_KEY);
  }
  return null;
};

export const setToken = (token: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(TOKEN_KEY, token);
  }
};

export const removeToken = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(TOKEN_KEY);
  }
};
