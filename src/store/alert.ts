import { create } from "zustand";

interface AlertState {
  message: string | undefined;
  mode: "error" | "warn" | "success" | undefined;
  duration: number | undefined; // এখানে duration যুক্ত করা হয়েছে
  show: (
    msg: string | undefined, 
    mod: "error" | "warn" | "success" | undefined,
    duration?: number
  ) => void;
  hide: () => void;
}

export const useAlert = create<AlertState>((set) => ({
  message: undefined,
  mode: undefined,
  duration: undefined,
  
  show: (msg, mod, duration) => {
    set((state) => {
      // আগের কোনো টাইমআউট থাকলে তা পরিষ্কার করার জন্য এটি ভালো অভ্যাস
      setTimeout(() => {
        // সরাসরি state.hide() কল না করে বাইরের hide ফাংশন ব্যবহার করা নিরাপদ
        set({ message: undefined, mode: undefined, duration: undefined });
      }, duration ?? 5555);

      return { message: msg, mode: mod, duration: duration };
    });
  },

  hide: () =>
    set({
      message: undefined,
      mode: undefined,
      duration: undefined,
    }),
}));
