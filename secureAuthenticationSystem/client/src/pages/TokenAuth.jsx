import { useEffect, useState } from "react";
import axios from "axios";

export default function TokenAuth() {

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-100 to-purple-200 p-6">
      <div className="bg-white p-10 rounded-xl shadow-xl max-w-3xl w-full text-center">
        <h1 className="text-2xl font-bold text-purple-700 mb-4">
          Token-Based Authentication
        </h1>
        <p className="text-lg mb-2 text-gray-700">
          Hello, <span className="font-semibold">user</span>
        </p>
        <p className="text-left mt-4 text-gray-800">
          <strong>What are Tokens?</strong><br />
          Tokens (usually JWTs) are self-contained credentials signed by the server and stored client-side.
        </p>
        <ul className="list-disc text-left ml-5 mt-2 text-gray-700">
          <li>User logs in, receives token</li>
          <li>Token stored in localStorage or cookies</li>
          <li>Token sent in Authorization header on each request</li>
          <li>Server verifies and decodes token to allow access</li>
        </ul>
        <p className="mt-3 text-left text-gray-800">
          <strong>When to use:</strong> For stateless APIs, SPAs, or when using microservices.
        </p>
        <p className="mt-2 text-left text-green-700 font-semibold">✅ Advantages:</p>
        <ul className="list-disc text-left ml-5 text-gray-700">
          <li>Stateless and scalable</li>
          <li>Can be used across services/domains</li>
        </ul>
        <p className="mt-2 text-left text-red-600 font-semibold">❌ Disadvantages:</p>
        <ul className="list-disc text-left ml-5 text-gray-700">
          <li>Tokens can be stolen from localStorage if XSS vulnerability exists</li>
          <li>Difficult to revoke unless you manage a blacklist</li>
        </ul>
      </div>
    </div>
  );
}
