import React, { createContext, useContext } from "react";

// Создаем контекст для боковой панели
interface SidebarContextType {
  isPanelOpen: boolean;
  togglePanel: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isPanelOpen, setIsPanelOpen] = React.useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <SidebarContext.Provider value={{ isPanelOpen, togglePanel }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

interface BurgerElemProps {
    className?: string;
  }
  

const Burger: React.FC<BurgerElemProps> = ({ className = "" }) => {
  const { isPanelOpen, togglePanel } = useSidebar();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    togglePanel();
  };

  return (
    <div
      id="burger"
      className={`${className} ${isPanelOpen ? "active" : ""}`}
      onClick={handleClick}
      aria-label="Меню"
      role="button"
    >
      <button type="button" className="burger-button" title="Меню">
        <span className="sr-only">Переключить меню</span>
        <span className="burger-bar burger-bar--1"></span>
        <span className="burger-bar burger-bar--2"></span>
        <span className="burger-bar burger-bar--3"></span>
      </button>
    </div>
  );
};

export default Burger;
