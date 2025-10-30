import { create } from "zustand";

export const useUserStore = create(() => ({
  user: {
    name: "Panji Asmoro",
    email: "init6linux24@gmail.com",
    work: "Software Developer",
  },
}));
