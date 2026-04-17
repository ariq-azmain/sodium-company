'use client';

import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import { Mail, AtSign, User, Eye, EyeOff, KeyRound, ArrowLeft } from 'lucide-react';

import '@/css/register.css';
import { AstronautCanvas } from '@/canvas'

type ActiveTab = 'login' | 'register';

type RegistrationStep = 1 | 2 | 3;

type MessageState = {
  text: string;
  type: 'success' | 'error' | '';
};

type ApiErrorResponse = {
  error?: string;
};

axios.defaults.withCredentials = true;

export default function AuthPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<ActiveTab>('login');

  const [loginEmail, setLoginEmail] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [showLoginPassword, setShowLoginPassword] = useState<boolean>(false);
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const [loginMessage, setLoginMessage] = useState<MessageState>({ text: '', type: '' });

  const [step, setStep] = useState<RegistrationStep>(1);
  const [regEmail, setRegEmail] = useState<string>('');
  const [regCode, setRegCode] = useState<string>('');
  const [regUsername, setRegUsername] = useState<string>('');
  const [regPassword, setRegPassword] = useState<string>('');
  const [regConfirmPassword, setRegConfirmPassword] = useState<string>('');
  const [regFirstName, setRegFirstName] = useState<string>('');
  const [regLastName, setRegLastName] = useState<string>('');
  const [showRegPassword, setShowRegPassword] = useState<boolean>(false);
  const [showRegConfirmPassword, setShowRegConfirmPassword] = useState<boolean>(false);
  const [regLoading, setRegLoading] = useState<boolean>(false);
  const [regMessage, setRegMessage] = useState<MessageState>({ text: '', type: '' });

  const showMessage = (
    setter: React.Dispatch<React.SetStateAction<MessageState>>,
    text: string,
    type: MessageState['type']
  ): void => {
    setter({ text, type });
    setTimeout(() => setter({ text: '', type: '' }), 5000);
  };

  const handleSendCode = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    setRegLoading(true);
    try {
      const res = await axios.post('/api/auth/send-verification', { email: regEmail });
      if (res.data.success) {
        showMessage(setRegMessage, 'Verification code sent to your email.', 'success');
        setStep(2);
      }
    } catch (err) {
      const axiosErr = err as AxiosError<ApiErrorResponse>;
      const msg = axiosErr.response?.data?.error ?? 'Failed to send code.';
      showMessage(setRegMessage, msg, 'error');
    } finally {
      setRegLoading(false);
    }
  };

  //code verify 
  const handleVerifyCode = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    setRegLoading(true);
    try {
      const res = await axios.post('/api/auth/verify-code', { email: regEmail, code: regCode });
      if (res.data.success) {
        showMessage(setRegMessage, 'Email verified!', 'success');
        setStep(3);
      }
    } catch (err) {
      const axiosErr = err as AxiosError<ApiErrorResponse>;
      const msg = axiosErr.response?.data?.error ?? 'Invalid code.';
      showMessage(setRegMessage, msg, 'error');
    } finally {
      setRegLoading(false);
    }
  };

  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    if (regPassword.length < 6) {
      showMessage(setRegMessage, 'Password must be at least 6 characters.', 'error');
      return;
    }
    if (regPassword !== regConfirmPassword) {
      showMessage(setRegMessage, 'Passwords do not match.', 'error');
      return;
    }
    setRegLoading(true);
    try {
      const res = await axios.post('/api/users', {
        email: regEmail,
        username: regUsername,
        password: regPassword,
        firstName: regFirstName,
        lastName: regLastName,
      });
      if (res.data.success) {
        showMessage(setRegMessage, 'Registration successful! Redirecting...', 'success');
        setTimeout(() => router.push('/role'), 1000);
      }
    } catch (err) {
      const axiosErr = err as AxiosError<ApiErrorResponse>;
      const msg = axiosErr.response?.data?.error ?? 'Registration failed.';
      showMessage(setRegMessage, msg, 'error');
    } finally {
      setRegLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoginLoading(true);
    try {
      const res = await axios.post('/api/auth/login', {
        email: loginEmail,
        password: loginPassword,
      });
      if (res.data.success) {
        showMessage(setLoginMessage, 'Login successful! Redirecting...', 'success');
        setTimeout(() => router.push('/profile'), 1500);
      }
    } catch (err) {
      const axiosErr = err as AxiosError<ApiErrorResponse>;
      const msg = axiosErr.response?.data?.error ?? 'Invalid email or password.';
      showMessage(setLoginMessage, msg, 'error');
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <div className="mt-[200px]">
      <div className='absolute top-[100px] w-full  justify-center items-center
      hidden max-[956px]:flex'>
        <a className="cursor-pointer" href='#auth'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4
          border-[#797979] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-6 h-6 rounded-full bg-[#878b9d] mb-1'
            />
          </div>
        </a>
      </div>
    <AstronautCanvas/>
    <div className="auth-container" id="auth">
      <div className="auth-box">
        <div className="auth-header">
          <h2>Welcome to <b className="sodium font-bold">SODIUM</b></h2>
          <p>Join our tech community and access exclusive content</p>
        </div>

        <div className="auth-tabs overflow-hidden">
          <button
            className={`tab-btn ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => { setActiveTab('register'); setStep(1); }}
          >
            Register
          </button>
        </div>

        <div className="form-container">
          {/* লগইন ফর্ম */}
          <form className={`auth-form ${activeTab === 'login' ? 'active' : ''}`} onSubmit={handleLogin}>
            {loginMessage.text && (
              <div className={`message ${loginMessage.type}`}>{loginMessage.text}</div>
            )}

            <div className="form-group">
              <label htmlFor="loginEmail">Email Address</label>
              <div className="input-with-icon">
                <input
                  type="email"
                  id="loginEmail"
                  className="form-input"
                  placeholder="Enter your email"
                  value={loginEmail}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginEmail(e.target.value)}
                  required
                />
                <Mail className="icon" size={18} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="loginPassword">Password</label>
              <div className="input-with-icon">
                <input
                  type={showLoginPassword ? 'text' : 'password'}
                  id="loginPassword"
                  className="form-input"
                  placeholder="Enter your password"
                  value={loginPassword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                >
                  {showLoginPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button type="submit" className="form-submit" disabled={loginLoading}>
              {loginLoading ? <span className="spinner"></span> : 'Login to SODIUM'}
            </button>

            <div className="auth-footer">
              <p>
                Don&apos;t have an account?{' '}
                <a
                  href="#"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    setActiveTab('register');
                    setStep(1);
                  }}
                >
                  Sign up here
                </a>
              </p>
            </div>
          </form>

          {/* রেজিস্ট্রেশন ফর্ম */}
          <form className={`auth-form ${activeTab === 'register' ? 'active' : ''}`}>
            {regMessage.text && (
              <div className={`message ${regMessage.type}`}>{regMessage.text}</div>
            )}

            {/* স্টেপ ১: ইমেইল */}
            {step === 1 && (
              <>
                <div className="form-group">
                  <label htmlFor="regEmail">Email Address</label>
                  <div className="input-with-icon">
                    <input
                      type="email"
                      id="regEmail"
                      className="form-input"
                      placeholder="Enter your email"
                      value={regEmail}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegEmail(e.target.value)}
                      required
                    />
                    <Mail className="icon !inline" size={18} />
                  </div>
                </div>
                <button
                  type="button"
                  className="form-submit"
                  onClick={handleSendCode}
                  disabled={regLoading}
                >
                  {regLoading ? <span className="spinner"></span> : 'Send Verification Code'}
                </button>
              </>
            )}

            {/* স্টেপ ২: কোড */}
            {step === 2 && (
              <>
                <div className="form-group">
                  <label htmlFor="regCode">Verification Code (6 digits)</label>
                  <div className="input-with-icon">
                    <input
                      type="text"
                      id="regCode"
                      className="form-input"
                      placeholder="Enter 6-digit code"
                      maxLength={6}
                      value={regCode}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegCode(e.target.value)}
                      required
                    />
                    <KeyRound className="icon" size={18} />
                  </div>
                </div>
                <button
                  type="button"
                  className="form-submit"
                  onClick={handleVerifyCode}
                  disabled={regLoading}
                >
                  {regLoading ? <span className="spinner"></span> : 'Verify Code'}
                </button>
                <button
                  type="button"
                  className="form-submit back-btn"
                  onClick={() => setStep(1)}
                  disabled={regLoading}
                >
                  <ArrowLeft size={18} style={{ marginRight: 8 }} />
                  Back
                </button>
              </>
            )}

            {/* স্টেপ ৩: ইউজার ইনফো */}
            {step === 3 && (
              <>
                <div className="form-group">
                  <label htmlFor="regUsername">Username</label>
                  <div className="input-with-icon">
                    <input
                      type="text"
                      id="regUsername"
                      className="form-input"
                      placeholder="Choose a username"
                      value={regUsername}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegUsername(e.target.value)}
                      required
                    />
                    <AtSign className="icon" size={18} />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="regFirstName">First Name (optional)</label>
                  <div className="input-with-icon">
                    <input
                      type="text"
                      id="regFirstName"
                      className="form-input"
                      placeholder="First name"
                      value={regFirstName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegFirstName(e.target.value)}
                    />
                    <User className="icon" size={18} />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="regLastName">Last Name (optional)</label>
                  <div className="input-with-icon">
                    <input
                      type="text"
                      id="regLastName"
                      className="form-input"
                      placeholder="Last name"
                      value={regLastName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegLastName(e.target.value)}
                    />
                    <User className="icon" size={18} />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="regPassword">Password</label>
                  <div className="input-with-icon">
                    <input
                      type={showRegPassword ? 'text' : 'password'}
                      id="regPassword"
                      className="form-input"
                      placeholder="Create a password (min. 6 characters)"
                      value={regPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => setShowRegPassword(!showRegPassword)}
                    >
                      {showRegPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="regConfirmPassword">Confirm Password</label>
                  <div className="input-with-icon">
                    <input
                      type={showRegConfirmPassword ? 'text' : 'password'}
                      id="regConfirmPassword"
                      className="form-input"
                      placeholder="Confirm your password"
                      value={regConfirmPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegConfirmPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => setShowRegConfirmPassword(!showRegConfirmPassword)}
                    >
                      {showRegConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  className="form-submit"
                  onClick={handleRegister}
                  disabled={regLoading}
                >
                  {regLoading ? <span className="spinner"></span> : 'Create Account'}
                </button>
                <button
                  type="button"
                  className="form-submit back-btn"
                  onClick={() => setStep(2)}
                  disabled={regLoading}
                >
                  <ArrowLeft size={18} style={{ marginRight: 8 }} />
                  Back
                </button>
              </>
            )}

            {step === 1 && (
              <div className="auth-footer">
                <p>
                  Already have an account?{' '}
                  <a
                    href="#"
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault();
                      setActiveTab('login');
                    }}
                  >
                    Login here
                  </a>
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
