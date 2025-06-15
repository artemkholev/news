import { withProviders } from "./withProviders";

export function Providers({ children }: { children: React.ReactNode }) {
  return withProviders(() => children)({});
}
