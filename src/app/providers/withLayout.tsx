import { PageWrapper } from "@/widgets/page-wrapper";

export const withLayout = (Component: React.ComponentType) => {
  return () => (
    <PageWrapper>
      <Component />
    </PageWrapper>
  );
};
