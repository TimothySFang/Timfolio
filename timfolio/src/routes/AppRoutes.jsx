import { createBrowserRouter, useLocation, useNavigationType } from "react-router-dom";
import { useState, useEffect } from "react";
import PhotographyPage from "@/pages/Photography/PhotographyPage";
import SoftwarePage from "@/pages/Software/SoftwarePage";
import HomePage from "@/pages/Home/HomePage";
import SplashScreen from "../components/splash/SplashScreen";

// Wrapper component to handle splash screen logic
const Root = ({ children }) => {
  const [showSplash, setShowSplash] = useState(false);
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Check if this is a page refresh or direct navigation
    // navigationType will be "POP" on initial load or refresh
    const isPageRefresh = navigationType === "POP";
    
    // Only show splash on the home page and when it's a page refresh
    setShowSplash(location.pathname === '/' && isPageRefresh);
  }, [location, navigationType]);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {children}
    </>
  );
};

// Create routes with the Root wrapper
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Root>
        <HomePage />
      </Root>
    ),
  },
  {
    path: "/photography",
    element: (
      <Root>
        <PhotographyPage />
      </Root>
    ),
  },
  {
    path: "/software",
    element: (
      <Root>
        <SoftwarePage />
      </Root>
    ),
  },
], {
  basename: '/Timfolio',
});

export default router;