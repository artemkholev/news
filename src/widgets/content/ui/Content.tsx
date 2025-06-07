import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "@/shared/ui";
import { Breadcrumbs, Sidebar } from "@/shared/ui";

interface LayoutProps {
  children?: React.ReactNode;
}

const Content: React.FC<LayoutProps> = ({ children }) => {
  const { togglePanel } = useSidebar();
  const location = useLocation();

  // Проверка активного пути
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="content-layout bg-gray-50 min-h-screen flex">
      <Sidebar>
        <h1 className="sidebar-title text-2xl font-bold mb-8 text-gray-800 border-b pb-4 border-gray-200">
          <span className="text-blue-600">Nusly</span>AR
        </h1>
        <ul className="sidebar-nav space-y-2">
          {[
            { path: "/", icon: "🏠", text: "Главная" },
            { path: "/posts", icon: "📝", text: "Посты" },
            { path: "/profile", icon: "👤", text: "Профиль" },
            { path: "/settings", icon: "⚙️", text: "Настройки" },
          ].map((item) => (
            <li key={item.path} onClick={togglePanel}>
              <Link
                to={item.path}
                className={`sidebar-link group flex items-center px-4 py-3 rounded-lg transition-all ${
                  isActive(item.path)
                    ? "bg-blue-50 text-blue-600 border-l-4 border-blue-500"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <span className="sidebar-link-icon mr-3 text-lg transition-transform group-hover:scale-110">
                  {item.icon}
                </span>
                <span className="sidebar-link-text flex-1 font-medium">
                  {item.text}
                </span>
                <span className="sidebar-link-arrow opacity-0 group-hover:opacity-100 transition-all translate-x-[-5px] group-hover:translate-x-0 text-gray-400 group-hover:text-blue-500">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Sidebar>

      <main className="content flex-1 transition-all duration-300 ml-0 md:ml-64 p-4 md:p-8">
        <Breadcrumbs />
        <div className="content-children bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100 animate-fadeIn">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Content;
