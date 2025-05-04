
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
import ListeningActivityPage from "./pages/ListeningActivityPage";
import ReadingActivityPage from "./pages/ReadingActivityPage";
import Dashboard from "./pages/Dashboard";
import AboutPage from "./pages/AboutPage";
import LevelAssessmentPage from "./pages/LevelAssessmentPage";
import NotFound from "./pages/NotFound";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import { AuthProvider } from "./providers/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/auth" element={<AuthPage />} />
    <Route path="/lessons" element={<LessonsPage />} />
    <Route path="/lessons/:lessonId" element={<LessonDetail />} />
    <Route path="/about" element={<AboutPage />} />

    {/* Protected Routes */}
    <Route path="/practice" element={<ProtectedRoute><PracticePage /></ProtectedRoute>} />
    <Route path="/practice/:lessonId" element={<ProtectedRoute><PracticePage /></ProtectedRoute>} />
    <Route path="/conversation" element={<ProtectedRoute><ConversationPage /></ProtectedRoute>} />
    <Route path="/conversation/:lessonId" element={<ProtectedRoute><ConversationPage /></ProtectedRoute>} />
    <Route path="/conversation/scenario/:scenarioId" element={<ProtectedRoute><ConversationPage /></ProtectedRoute>} />
    <Route path="/listening/:activityId" element={<ProtectedRoute><ListeningActivityPage /></ProtectedRoute>} />
    <Route path="/reading/:activityId" element={<ProtectedRoute><ReadingActivityPage /></ProtectedRoute>} />
    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
    <Route path="/assessment" element={<ProtectedRoute><LevelAssessmentPage /></ProtectedRoute>} />
    <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
