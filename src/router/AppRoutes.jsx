import { Route, Routes } from "react-router-dom";
import { Content, Customization, Dashboard, Analytics } from "../containers/Container.jsx";
// import Analytics from "../containers/analytics/Analytic.jsx";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/content" element={<Content />} />
      <Route path="/customization" element={<Customization />} />
      <Route path="/analytics" element={<Analytics />} />
    </Routes>
  );
}
