import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";

export const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Single />} />
      </Routes>
    </MainLayout>
  );
};
