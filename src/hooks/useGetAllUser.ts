// src/hooks/useGetAllUser.ts
'use client';

import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// ─── User type ────────────────────────────────────────────────────────────────
export type User = {
  _id:       string;
  email:     string;
  username:  string;
  firstName: string;
  lastName:  string;
  status:    'pending' | 'accept' | 'reject';
  createdAt: string;
};

// ─── Return type ──────────────────────────────────────────────────────────────
type UseGetAllUsersReturn = {
  users:   User[];        // সব ইউজারের অ্যারে
  loading: boolean;       // fetch চলার সময় true
  error:   string | null; // error message বা null
  refetch: () => void;    // manually আবার fetch করতে চাইলে
};

// ─── Hook ────────────────────────────────────────────────────────────────────
export default function useGetAllUsers(): UseGetAllUsersReturn {
  const [users,   setUsers]   = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error,   setError]   = useState<string | null>(null);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get('/api/users', {
        withCredentials: true,
      });
      setUsers(res.data.data ?? []);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error ?? 'Failed to fetch users');
      } else {
        setError('Unknown error');
      }
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, loading, error, refetch: fetchUsers };
}
