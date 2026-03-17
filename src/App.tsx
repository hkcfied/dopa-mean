import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AppShortcut from "./pages/AppShortcut";
import Intercept from "./pages/Intercept";
import Why from "./pages/Why";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/app/:appId" element={<AppShortcut />} />
      <Route path="/open/:appId" element={<Intercept />} />
      <Route path="/why" element={<Why />} />
      <Route path="/case-study" element={<CaseStudy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
