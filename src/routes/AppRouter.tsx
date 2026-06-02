import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { DesignSystemPage } from "../pages/DesignSystem/DesignSystemPage";
import { FormPage } from "../pages/Form/FormPage";
import { LandingPage } from "../pages/Landing/LandingPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/reservar" element={<FormPage />} />
          <Route path="/design-system" element={<DesignSystemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
