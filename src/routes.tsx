import { Route, Routes } from "react-router-dom";
import ExamplePage from "./pages/ExamplePage";
import Members from "./pages/members/Members";
import CreateMembers from "./pages/members/Members.create";
import UpdateMembers from "./pages/members/Members.update";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ExamplePage title="First Page" />} />

      <Route path="/members" element={<Members />} />
      <Route path="/members/new" element={<CreateMembers />} />
      <Route path="/members/:id" element={<UpdateMembers />} />
    </Routes>
  );
};

export default AppRoutes;
