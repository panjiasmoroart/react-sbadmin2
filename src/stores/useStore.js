import { create } from "zustand";

export const useToggledStore = create((set) => ({
  toggled: false,
  toggledBurgerMenu: (e) => {
    if (e && e.preventDefault) e.preventDefault();
    set((state) => ({ toggled: !state.toggled }));
  },
}));

export const useDropdownToggledStore = create((set) => ({
  dropdowns: {},
  toggledDropdown: (key) => {
    set((state) => ({
      dropdowns: {
        ...state.dropdowns,
        [key]: !state.dropdowns[key],
      },
    }));
  },

  closeAll: () => set({ dropdowns: {} }),
}));
