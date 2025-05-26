import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const { data, error, loading } = useFetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/user/employees`
  );

  const employees = data?.employees || [];

  const handleRowClick = (id) => {
    navigate(`/employee/${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>

        <div className="flex justify-center mb-6">
          <button
            onClick={() => navigate("/admin/add-employee")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Employee
          </button>
        </div>

        {loading && <p className="text-center text-gray-600">Loading...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        {!loading && employees.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full border text-center">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">#</th>
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Email</th>
                  <th className="border px-4 py-2">Department</th>
                  <th className="border px-4 py-2">Postion</th>
                  <th className="border px-4 py-2">Salary</th>
                  <th className="border px-4 py-2">Date of Joining</th>
                  <th className="border px-4 py-2"></th>
                  {/* <th className="border px-4 py-2">Role</th> */}
                </tr>
              </thead>
              <tbody>
                {employees.map((emp, idx) => (
                  <tr
                    className="cursor-pointer bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 transition"
                    key={emp._id || idx}
                    onClick={() => handleRowClick(emp._id)}
                  >
                    <td className="border px-4 py-2">{idx + 1}</td>
                    <td className="border px-4 py-2">{emp.name}</td>
                    <td className="border px-4 py-2">{emp.email}</td>
                    <td className="border px-4 py-2">{emp.department}</td>
                    <td className="border px-4 py-2">{emp.position}</td>
                    <td className="border px-4 py-2">{emp.salary}</td>
                    <td className="border px-4 py-2">
                      {new Date(emp.dateOfJoining).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          !loading && (
            <p className="text-center text-gray-600">No employees found</p>
          )
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
