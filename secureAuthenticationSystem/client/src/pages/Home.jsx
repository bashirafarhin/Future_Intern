import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-teal-100 to-purple-200 p-6">
      <div className="bg-white p-10 rounded-xl shadow-2xl max-w-3xl w-full text-center">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">
          Welcome user
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">
          <button
            onClick={() => navigate("session-auth")}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Session-based Authentication
          </button>
          <button
            onClick={() => navigate("token-auth")}
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
          >
            Token-based Authentication
          </button>
        </div>
      </div>
    </div>
  );
}
