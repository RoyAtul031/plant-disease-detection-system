import React, { useState } from 'react';
import { Leaf, Lock, Mail, ArrowRight } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-emerald-900">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070&auto=format&fit=crop"
          alt="Lush green farm"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 flex flex-col justify-center px-16 text-white h-full">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-emerald-500 rounded-xl">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">AgriVision AI</h1>
          </div>
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Advanced Plant Disease Detection
          </h2>
          <p className="text-emerald-100 text-lg max-w-md leading-relaxed">
            Powered by ResNet-50 Convolutional Neural Networks. Upload images of your crops and get instant, accurate diagnoses to protect your yield.
          </p>
          
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-emerald-900 object-cover"
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt="User avatar"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-sm text-emerald-100 font-medium">
              Trusted by 10,000+ farmers worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 bg-white">
        <div className="w-full max-w-sm mx-auto">
          <div className="lg:hidden flex items-center gap-3 mb-10">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Leaf className="w-6 h-6 text-emerald-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">AgriVision AI</h1>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Welcome back</h2>
            <p className="text-gray-500">Please enter your details to sign in.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <a href="#" className="text-sm font-medium text-emerald-600 hover:text-emerald-500">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
            >
              Sign in
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-emerald-600 hover:text-emerald-500">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
