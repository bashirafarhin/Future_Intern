import { useEffect, useState } from "react";
import axios from "axios";

export default function SessionAuth() {

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-100 to-blue-200 p-6">
      <div className="bg-white p-10 rounded-xl shadow-xl max-w-3xl w-full text-center">
        <h1 className="text-2xl font-bold text-green-700 mb-4">
          Session-Based Authentication
        </h1>
        <p className="text-lg mb-2 text-gray-700">
          Hello, <span className="font-semibold">user</span>
        </p>
        <p className="text-left mt-4 text-gray-800">
          <strong>What are Sessions?</strong><br />
          Sessions store user data on the server and identify the user using a session ID stored in a cookie.
        </p>
        <ul className="list-disc text-left ml-5 mt-2 text-gray-700">
          <li>User logs in, server creates session</li>
          <li>Session ID stored in a cookie</li>
          <li>Browser sends cookie on every request</li>
          <li>Server validates session and gives access</li>
        </ul>
        <p className="mt-3 text-left text-gray-800">
          <strong>When to use:</strong> When you want the server to have control over user sessions (e.g., dashboards, admin panels).
        </p>
        <p className="mt-2 text-left text-green-700 font-semibold">✅ Advantages:</p>
        <ul className="list-disc text-left ml-5 text-gray-700">
          <li>More secure (data stored on server)</li>
          <li>Easy logout and session expiration control</li>
        </ul>
        <p className="mt-2 text-left text-red-600 font-semibold">❌ Disadvantages:</p>
        <ul className="list-disc text-left ml-5 text-gray-700">
          <li>Requires storage on the server (memory, Redis)</li>
          <li>Harder to scale across multiple servers</li>
        </ul>
      </div>
    </div>
  );
}
