// src/App.js

import React from 'react';
import './App.css';

function studentlogin() {
  return (
    <div className="App bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Student Login</h2>
        <form action="#" method="post">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input type="text" id="username" name="username" className="mt-1 p-2 w-full border rounded" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default studentlogin;
