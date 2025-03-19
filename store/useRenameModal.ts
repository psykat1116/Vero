import { create } from "zustand";

const defaultState = {
  id: "",
  title: "",
};

interface IRenameModal {
  isOpen: boolean;
  initialValues: typeof defaultState;
  open: (id: string, title: string) => void;
  close: () => void;
}

export const useRenameModal = create<IRenameModal>((set) => ({
  isOpen: false,
  initialValues: defaultState,
  open: (id, title) => set({ isOpen: true, initialValues: { id, title } }),
  close: () => set({ isOpen: false, initialValues: defaultState }),
}));
