import React from 'react';

type TProvider = React.FC<{ children: React.ReactNode }>;

const providerList: TProvider[] = [
  // ... другие провайдеры
];

/**
 * Композитный провайдер для всего приложения
 * @param Component - Корневой компонент приложения
 */
export const withProviders = (Component: React.ComponentType) => {
  return function WithProviders() {
    return providerList.reduceRight((Acc, Provider) => {
      return <Provider>{Acc}</Provider>;
    }, <Component />);
  };
};