import { create } from "zustand";

export const useAlert = create<{
   massage: string | undefined;
   mode: "error" | "warn" | "success" | undefined;
   show: (
      mod: "error" | "warn" | "success" | undefined,
      msg: string | undefined
   ) => void;
   hide: () => void;
}>(set => ({
   massage: undefined,
   mode: undefined,
   show: (
      msg: string | undefined,
      duration: number | undefined,
      mod: "error" | "warn" | "success" | undefined,
   ) => {
      set(state => {
         setTimeout(() => state.hide(), duration??5555);
         return { massage: msg, mode: mod };
      });
   },
   hide: () =>
      set(state => ({
         massage: undefined,
         mode: undefined,
         duration: undefined
      }))
}));
