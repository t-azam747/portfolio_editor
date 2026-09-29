"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import Preloader from "@/components/ui/Preloader";

type LoadingContextType = {
  isLoaded: boolean;
  isRevealed: boolean;
};

const LoadingContext = createContext<LoadingContextType>({
  isLoaded: false,
  isRevealed: false,
});

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoaded(true);
    // Slight offset as the curtain begins lifting to start upward reveals
    setTimeout(() => {
      setIsRevealed(true);
    }, 150);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoaded, isRevealed }}>
      <Preloader onComplete={handlePreloaderComplete} />
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => useContext(LoadingContext);
