"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ApplyState = {
  open: boolean;
  step: number;
  initialCategory: string;
  openApply: (category?: string) => void;
  setOpen: (open: boolean) => void;
  setStep: (step: number) => void;
};

const ApplyContext = createContext<ApplyState | null>(null);

export function ApplyProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [initialCategory, setInitialCategory] = useState("");

  const openApply = (category = "") => {
    setInitialCategory(category);
    setStep(1);
    setOpen(true);
  };

  return (
    <ApplyContext.Provider
      value={{ open, step, initialCategory, openApply, setOpen, setStep }}
    >
      {children}
    </ApplyContext.Provider>
  );
}

export function useApply() {
  const ctx = useContext(ApplyContext);
  if (!ctx) throw new Error("useApply must be used within ApplyProvider");
  return ctx;
}
