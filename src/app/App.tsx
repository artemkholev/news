import "./css/app.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { withProviders } from "./providers/withProviders";

// Чистый компонент App без провайдеров
const AppWithoutProviders = () => {
  return <RouterProvider router={router} />;
};

const App = withProviders(AppWithoutProviders);

// Обернутая версия со всеми провайдерами
export default App;
