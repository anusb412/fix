import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
    <Toaster  
      position="top-right"
      toastOptions={{
      className: "relative backdrop-blur-xl bg-white/10 text-white border border-white/20 shadow-2xl rounded-2xl px-5 py-4 flex items-center gap-3 animate-toast-in",
      duration: 4000,}} 
    />
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}
