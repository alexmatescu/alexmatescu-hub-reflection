import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteLayout from "@/components/SiteLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Projects from "./pages/Projects";
import Calatoria from "./pages/Calatoria";
import Lab from "./pages/Lab";
import LabPage from "./pages/LabPage";
import ProjectDetail from "./pages/ProjectDetail";
import Book from "./pages/Book";
import Contact from "./pages/Contact";
import AdminAbonati from "./pages/AdminAbonati";
import AdminCrandit from "./pages/AdminCrandit";
import AdminMesaje from "./pages/AdminMesaje";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/despre" element={<About />} />
            <Route path="/calatoria" element={<Calatoria />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/proiecte" element={<Projects />} />
            <Route path="/proiecte/:slug" element={<ProjectDetail />} />
            <Route path="/carte" element={<Book />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/lab/:slug" element={<LabPage />} />
            <Route path="/lab/:parent/:slug" element={<LabPage />} />
            <Route path="/ai-visibility" element={<Navigate to="/lab" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/abonati" element={<AdminAbonati />} />
            <Route path="/admin/crandit" element={<AdminCrandit />} />
            <Route path="/admin/mesaje" element={<AdminMesaje />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
