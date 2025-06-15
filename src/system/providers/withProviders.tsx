import React from "react";

type ProviderComponent = React.FC<{ children: React.ReactNode }>;

const providerList: ProviderComponent[] = [
  // ... другие провайдеры
];

/**
 * Композитный провайдер для всего приложения
 * @param Component - Корневой компонент приложения
 */
export const withProviders = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  const WithProviders: React.FC<P> = (props) => {
    return providerList.reduceRight((acc, Provider) => {
      return <Provider>{acc}</Provider>;
    }, <Component {...props} />);
  };

  // Для корректного отображения имени компонента в DevTools
  WithProviders.displayName = "WithProviders";

  return WithProviders;
};
