import React, { useEffect } from "react";
import { useSidebar } from "@/shared/ui";

export const Sidebar: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isPanelOpen, togglePanel } = useSidebar();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const sidebar = document.querySelector(".sidebar-panel");
      if (isPanelOpen && sidebar && !sidebar.contains(e.target as Node)) {
        togglePanel();
      }
    };

    if (isPanelOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPanelOpen, togglePanel]);

  return (
    <>
      {isPanelOpen && (
        <div className="sidebar-backdrop" onClick={togglePanel} />
      )}

      {isPanelOpen && (
        <div className="sidebar">
          <div className="sidebar-panel">{children}</div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
