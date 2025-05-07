// Login.jsx
'use client';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const Login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const loginForm = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/authenticate`, values);
        toast.success('Login successful');
        localStorage.setItem('token', res.data.token);
        router.push('/user/profile');
      } catch {
        toast.error('Login failed');
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-amber-900 mb-6">Sign In</h1>
        <form onSubmit={loginForm.handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={loginForm.handleChange}
            value={loginForm.values.email}
            className="w-full border rounded p-2 focus:ring-amber-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={loginForm.handleChange}
            value={loginForm.values.password}
            className="w-full border rounded p-2 focus:ring-amber-500"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-amber-700 text-white py-2 rounded hover:bg-amber-800 transition"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Don't have an account?{' '}
          <Link href="/signup" className="text-amber-700 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
