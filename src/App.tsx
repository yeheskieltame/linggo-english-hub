
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LessonsPage from "./pages/LessonsPage";
import LessonDetail from "./pages/LessonDetail";
import PracticePage from "./pages/PracticePage";
import ConversationPage from "./pages/ConversationPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lessons" element={<LessonsPage />} />
          <Route path="/lessons/:lessonId" element={<LessonDetail />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/practice/:lessonId" element={<PracticePage />} />
          <Route path="/conversation" element={<ConversationPage />} />
          <Route path="/conversation/:lessonId" element={<ConversationPage />} />
          <Route path="/conversation/scenario/:scenarioId" element={<ConversationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
