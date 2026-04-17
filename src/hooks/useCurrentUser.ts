// src/hooks/useCurrentUser.ts
"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import type {User} from '@/types/user'




type UseCurrentUserReturn = {
   user: User | null; 
   loading: boolean; 
   error: string | null;
   isLoggedIn: boolean;
};


export default function useCurrentUser(): UseCurrentUserReturn {
   const [user, setUser] = useState<User | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      let cancelled = false;

      const fetchMe = async () => {
         try {
            const res = await axios.get("/api/auth/me", {
               withCredentials: true
            });

            if (!cancelled) {
               setUser(res.data.user);
            }
         } catch (err: unknown) {
            if (cancelled) return;

            if (axios.isAxiosError(err)) {
               if (err.response?.status === 401) {
                  setUser(null);
               } else {
                  setError(err.response?.data?.error ?? "Failed to fetch user");
               }
            } else {
               setError("Unknown error");
            }
         } finally {
            if (!cancelled) setLoading(false);
         }
      };

      fetchMe();

      return () => {
         cancelled = true;
      };
   }, []);

   return {
      user,
      loading,
      error,
      isLoggedIn: user !== null
   };
}
