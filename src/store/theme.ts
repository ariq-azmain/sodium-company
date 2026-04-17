import { create } from "zustand";

export const useTheme = create<{
   currentTheme: string;
   dark: () => void;
   light: () => void;
   toggleTheme: () => void;
}>(set => ({
   currentTheme: "dark",
   dark: () => set(state => ({ currentTheme: "dark" })),
   light: () => set(state => ({ currentTheme: "light" })),
   toggleTheme: () =>
      set(state => ({
         currentTheme: state.currentTheme === "dark" ? "light" : "dark"
      }))
}));
