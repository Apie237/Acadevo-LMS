import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import PageLoader from "./components/PageLoader.jsx";

// Marketing site
import Home from "./pages/Home.jsx";
const About = lazy(() => import("./pages/About.jsx"));
const Works = lazy(() => import("./pages/Works.jsx"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail.jsx"));
const Academy = lazy(() => import("./pages/Academy.jsx"));
const Programs = lazy(() => import("./pages/Programs.jsx"));
const ProgramDetail = lazy(() => import("./pages/ProgramDetail.jsx"));
const Reports = lazy(() => import("./pages/Reports.jsx"));
const SessionReport = lazy(() => import("./pages/SessionReport.jsx"));
const Team = lazy(() => import("./pages/Team.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

// Existing learning-platform (LMS) pages
const Courses = lazy(() => import("./pages/Courses.jsx"));
const CourseDetail = lazy(() => import("./pages/CourseDetail.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:id" element={<ProjectDetail />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/academy/programs" element={<Programs />} />
          <Route path="/academy/programs/:id" element={<ProgramDetail />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/reports/two-week-session" element={<SessionReport />} />
          <Route path="/reports/one-week-session" element={<Navigate to="/reports/two-week-session" replace />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Friendly aliases */}
          <Route path="/programs" element={<Navigate to="/academy/programs" replace />} />
          <Route path="/projects" element={<Navigate to="/works" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
