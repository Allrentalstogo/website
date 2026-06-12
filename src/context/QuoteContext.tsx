"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type QuoteContextType = {
  selectedServices: string[];
  addService: (service: string) => void;
  removeService: (service: string) => void;
  toggleService: (service: string) => void;
  clearServices: () => void;
};

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const addService = (service: string) => {
    setSelectedServices((prev) => prev.includes(service) ? prev : [...prev, service]);
  };

  const removeService = (service: string) => {
    setSelectedServices((prev) => prev.filter((s) => s !== service));
  };

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const clearServices = () => setSelectedServices([]);

  return (
    <QuoteContext.Provider value={{ selectedServices, addService, removeService, toggleService, clearServices }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) throw new Error("useQuote must be used within QuoteProvider");
  return context;
}
