import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/user/all-users`,
        {
          withCredentials: true,
        }
      );
      setUsers(res.data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  const handleDelete = async () => {
    if (!selectedEmail) return;
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/user/delete-user`,
        {
          data: { email: selectedEmail },
          withCredentials: true,
        }
      );

      setUsers((prev) => prev.filter((user) => user.email !== selectedEmail));
      setSelectedEmail(null);
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>

      {users.length === 0 ? (
        <p className="text-gray-600">No users found.</p>
      ) : (
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr
                key={u.email}
                className={`cursor-pointer hover:bg-gray-100 ${
                  selectedEmail === u.email ? "bg-blue-100" : ""
                }`}
                onClick={() => {
                  if (u.role === "reader") setSelectedEmail(u.email);
                  else setSelectedEmail(null);
                }}
              >
                <td className="p-2 border">{u.email}</td>
                <td className="p-2 border">{u.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        onClick={handleDelete}
        disabled={!selectedEmail}
      >
        Delete Selected Reader
      </button>
    </div>
  );
};

export default AdminDashboard;
