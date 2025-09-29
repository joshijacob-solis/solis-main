import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/homePage";
import { AboutPage } from "../pages/AboutPage/aboutPage";
import { ProjetsPage } from "../pages/ProjectPage/projectsPage";
import { GalleryPage } from "../pages/GalleryPage/galleryPage";
import { ServicesPage } from "../pages/ServicesPage/servicesPage";
import { ContactPage } from "../pages/ContactPage/contactPage";
import { MainPageLayout } from "../pageLayouts/mainPageLayout";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPageLayout />}>
        {/* Use "index" property to set HomePage as the default route */}
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjetsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

