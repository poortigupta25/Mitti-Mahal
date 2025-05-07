'use client';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required')
});

const Login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/authenticate`, values);
        if(res.status === 200) {
          toast.success('Login successful');
          localStorage.setItem('token', res.data.token);
          router.push('/user/profile'); // Redirect to user profile after login
        }
      } catch (error) {
        console.error(error);
        toast.error(error.response?.data?.message || 'Login failed');
      } finally {
        setIsLoading(false);
      }
    },
    validationSchema: LoginSchema
  });

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700 w-full max-w-md">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Don't have an account yet?{" "}
              <Link
                className="text-blue-600 decoration-2 hover:underline font-medium"
                href="/signup"
              >
                Sign up here
              </Link>
            </p>
          </div>

          <div className="mt-5">
            {/* Social Login Button */}
            <button
              type="button"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4"/>
                <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853"/>
                <path d="M10.1505 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588L10.0791 18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1505 28.1413Z" fill="#FBBC05"/>
                <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335"/>
              </svg>
              Sign in with Google
            </button>

            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">Or</div>

            {/* Form */}
            <form onSubmit={loginForm.handleSubmit}>
              <div className="grid gap-y-4">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 dark:text-white">
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={loginForm.handleChange}
                      onBlur={loginForm.handleBlur}
                      value={loginForm.values.email}
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                      required
                    />
                    {loginForm.touched.email && loginForm.errors.email && (
                      <p className="text-xs text-red-600 mt-2">{loginForm.errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="block text-sm mb-2 dark:text-white">
                      Password
                    </label>
                    <Link
                      className="text-sm text-blue-600 decoration-2 hover:underline font-medium"
                      href="/forgot-password"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      onChange={loginForm.handleChange}
                      onBlur={loginForm.handleBlur}
                      value={loginForm.values.password}
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                      required
                    />
                    {loginForm.touched.password && loginForm.errors.password && (
                      <p className="text-xs text-red-600 mt-2">{loginForm.errors.password}</p>
                    )}
                  </div>
                </div>

                {/* Remember me checkbox */}
                <div className="flex items-center">
                  <div className="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700"
                    />
                  </div>
                  <div className="ms-3">
                    <label htmlFor="remember-me" className="text-sm dark:text-white">
                      Remember me
                    </label>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  {isLoading ? (
                    <>
                      <span className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>
                      Signing in...
                    </>
                  ) : (
                    'Sign in'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;