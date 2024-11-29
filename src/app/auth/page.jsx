"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false); // Track whether to show Login or Register
  const router = useRouter(); // Router hook for navigation

  const handleLoginSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    // Here you would generally handle login logic (e.g., call API)
    // For now, we simulate a successful login and redirect
    router.push("/pages/dashboard"); // Redirect to dashboard after login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md ">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          {isRegister ? "Register" : "Login"}
        </h1>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setIsRegister(false)}
            className={`px-4 py-2 rounded ${
              !isRegister
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsRegister(true)}
            className={`px-4 py-2 rounded ${
              isRegister
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Register
          </button>
        </div>

        {/* Conditional Form Rendering */}
        {isRegister ? (
          <RegisterForm />
        ) : (
          <LoginForm onLogin={handleLoginSubmit} />
        )}
      </div>
    </div>
  );
}

// Login Form Component
function LoginForm({ onLogin }) {
  return (
    <form onSubmit={onLogin}>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 font-bold font-sans"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-bold font-sans"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-sans"
      >
        Login
      </button>
    </form>
  );
}

// Register Form Component
function RegisterForm() {
  return (
    <form>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 font-bold font-sans"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 font-bold font-sans"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-bold font-sans"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Create a password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-sans"
      >
        Register
      </button>
    </form>
  );
}
