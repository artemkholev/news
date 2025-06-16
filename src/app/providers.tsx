"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { PageWrapper } from "@/widgets/page-wrapper";
import theme from "@/system/css/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <PageWrapper>{children}</PageWrapper>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
