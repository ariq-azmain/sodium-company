'use client';

import React, { useState } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSendCode = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  setError('');
  setMessage('');

  try {
    console.log('Sending verification code to:', email);
    const response = await axios.post('/api/auth/send-verification', { email });
    console.log('Send code response:', response.data);
    if (response.data.success) {
      setMessage('Verification code sent to your email.');
      setStep(2);
    }
  } catch (err) {
    console.error('Send code error:', err);
    if (axios.isAxiosError(err)) {
      console.error('Error response:', err.response?.data);
      setError(err.response?.data?.error || 'Something went wrong');
    } else {
      setError('An unexpected error occurred');
    }
  } finally {
    setLoading(false);
  }
};

const handleVerifyCode = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  setError('');
  setMessage('');

  try {
    console.log('Verifying code for:', email);
    const response = await axios.post('/api/auth/verify-code', { email, code });
    console.log('Verify code response:', response.data);
    if (response.data.success) {
      setMessage('Email verified! Now complete your registration.');
      setStep(3);
    }
  } catch (err) {
    console.error('Verify code error:', err);
    if (axios.isAxiosError(err)) {
      console.error('Error response:', err.response?.data);
      setError(err.response?.data?.error || 'Invalid code');
    } else {
      setError('An unexpected error occurred');
    }
  } finally {
    setLoading(false);
  }
};

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  setError('');
  setMessage('');

  try {
    console.log('Registering user:', { email, username });
    const response = await axios.post('/api/users', {
      email,
      username,
      password,
      firstName,
      lastName,
    });
    console.log('Register response:', response.data);
    if (response.data.success) {
      setMessage('Registration successful! You are now logged in.');
    }
  } catch (err) {
    console.error('Register error:', err);
    if (axios.isAxiosError(err)) {
      console.error('Error response:', err.response?.data);
      setError(err.response?.data?.error || 'Registration failed');
    } else {
      setError('An unexpected error occurred');
    }
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="!mt-[300px] min-h-screen bg-gray-200 text-black !py-12 !px-4 sm:!px-6 lg:!px-8">
      <div className="max-w-md !mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="!px-6 !py-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 !mb-8">
            SODIUM Registration
          </h2>

          {error && (
            <div className="!mb-4 !p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          {message && (
            <div className="!mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
              {message}
            </div>
          )}

          {step === 1 && (
            <form onSubmit={handleSendCode}>
              <div className="!mb-4">
                <label htmlFor="email" className="block text-sm font-medium
                text-gray-700 !mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e: React.FormEvent<HTMLFormElement>) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="w-full !px-3 !py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white !py-2 !px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Verification Code'}
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleVerifyCode}>
              <div className="mb-4">
                <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
                  Verification Code (6 digits)
                </label>
                <input
                  type="text"
                  id="code"
                  value={code}
                  onChange={(e: React.FormEvent<HTMLFormElement>) => setCode(e.target.value)}
                  maxLength={6}
                  required
                  disabled={loading}
                  className="w-full !px-3 !py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter 6-digit code"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white !py-2 !px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 mb-2"
              >
                {loading ? 'Verifying...' : 'Verify Code'}
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                disabled={loading}
                className="w-full bg-gray-500 text-white !py-2 !px-4 rounded-md hover:bg-gray-600 disabled:opacity-50"
              >
                Back
              </button>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  minLength={3}
                  disabled={loading}
                  className="w-full !px-3 !py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Choose a username"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  disabled={loading}
                  className="w-full !px-3 !py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Create a password"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name (optional)
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  disabled={loading}
                  className="w-full !px-3 !py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="First name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name (optional)
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  disabled={loading}
                  className="w-full !px-3 !py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Last name"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white !py-2 !px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 mb-2"
              >
                {loading ? 'Registering...' : 'Register'}
              </button>
              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={loading}
                className="w-full bg-gray-500 text-white !py-2 !px-4 rounded-md hover:bg-gray-600 disabled:opacity-50"
              >
                Back
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}