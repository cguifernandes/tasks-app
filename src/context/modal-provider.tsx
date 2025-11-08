import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type ModalType = "createTask" | "login" | "register" | null;

type ModalContextType = {
  currentModal: ModalType;
  openModal: (modal: ModalType) => void;
  closeModal: () => void;
  isModalOpen: (modal: ModalType) => boolean;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

type ModalProviderProps = {
  children: ReactNode;
};

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [currentModal, setCurrentModal] = useState<ModalType>(null);

  const openModal = (modal: ModalType) => {
    setCurrentModal(modal);
  };

  const closeModal = () => {
    setCurrentModal(null);
  };

  const isModalOpen = (modal: ModalType) => {
    return currentModal === modal;
  };

  return (
    <ModalContext.Provider
      value={{
        currentModal,
        openModal,
        closeModal,
        isModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal deve ser usado dentro de um ModalProvider");
  }
  return context;
};
