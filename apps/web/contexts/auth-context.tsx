"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

type AuthModalType = "login" | "signup" | "forgotPassword" | null;

interface AuthContextType {
  activeModal: AuthModalType;
  openModal: (modal: AuthModalType) => void;
  closeModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeModal, setActiveModal] = useState<AuthModalType>(null);

  const openModal = (modal: AuthModalType) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);

  return (
    <AuthContext.Provider value={{ activeModal, openModal, closeModal }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
