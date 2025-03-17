import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import MainLayout from "./layouts/MainLayout";

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Router>
  );
};

export default App;
