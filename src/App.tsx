import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "./components/ui/sonner";
import { WeatherDashboard } from "./pages/weather-dashboard";
import { Layout } from "./components/layout";
import { ThemeProvider } from "./context/theme-provider";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { CityPage } from "./pages/city-page";
import WelcomePage from "./components/WelcomePage";
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import AboutPage from "./components/AboutPage";
import TeamPage from "./components/TeamPage";
import ContactPage from "./components/ContactPage";
import FeaturesPage from "./components/FeaturesPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={
              <>
                <SignedIn><Navigate to="/dashboard" replace /></SignedIn>
                <SignedOut><Layout isProtected={false}><WelcomePage /></Layout></SignedOut>
              </>
            } />
            <Route path="/about" element={<Layout isProtected={false}><AboutPage /></Layout>} />
            <Route path="/team" element={<Layout isProtected={false}><TeamPage /></Layout>} />
            <Route path="/contact" element={<Layout isProtected={false}><ContactPage /></Layout>} />
            <Route path="/features" element={<Layout isProtected={false}><FeaturesPage /></Layout>} />
            
            {/* Protected routes */}
            <Route path="/dashboard" element={
              <>
                <SignedIn><Layout isProtected={true}><WeatherDashboard /></Layout></SignedIn>
                <SignedOut><Navigate to="/" replace /></SignedOut>
              </>
            } />
            <Route path="/city/:cityName" element={
              <>
                <SignedIn><Layout isProtected={true}><CityPage /></Layout></SignedIn>
                <SignedOut><Navigate to="/" replace /></SignedOut>
              </>
            } />
          </Routes>
          <Toaster richColors />
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;