import { useDropdownToggledStore } from "../stores/useStore";

export const useDropdown = (key) => {
  const { dropdowns, toggledDropdown } = useDropdownToggledStore();

  return {
    isOpen: !!dropdowns[key],
    toggle: () => toggledDropdown(key),
  };
};
