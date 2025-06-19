"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { PageWrapper } from "@/widgets/page-wrapper";
import theme from "@/system/css/theme";
import StoreProvider from "@/system/providers/StoreProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme}>
          <PageWrapper>{children}</PageWrapper>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </StoreProvider>
  );
}
