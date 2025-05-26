// import { useParams, useNavigate } from "react-router-dom";
// import useFetch from "../hooks/useFetch";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import axios from "axios";

// const EmployeeDashboard = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext);
  

//   const isAdmin = user?.role === "admin";

//   const { data: employee, loading, error } = useFetch(
//     `${import.meta.env.VITE_BACKEND_URL}/api/user/employees/${id}`
//   );

//   const [formData, setFormData] = useState({
//     name: "",
//     department: "",
//     position: "",
//     salary: "",
//     email: "",
//     dateOfJoining: "",
//   });

//   useEffect(() => {
//     if (employee) {
//       setFormData({
//         name: employee.name || "",
//         department: employee.department || "",
//         position: employee.position || "",
//         salary: employee.salary || "",
//         email: employee.email || "",
//         dateOfJoining: employee.dateOfJoining || "",
//       });
//     }
//   }, [employee]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleUpdate = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const { name, email, dateOfJoining, ...updatableFields } = formData;

//       const res = await axios.put(
//         `${import.meta.env.VITE_BACKEND_URL}/api/user/employees/${id}`,
//         updatableFields,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       alert("Employee updated successfully");
//     } catch (err) {
//       console.error(err);
//       alert("Update failed");
//     }
//   };

//   const handleDelete = async () => {
//     if (!confirm("Are you sure you want to delete this employee?")) return;
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.delete(
//         `${import.meta.env.VITE_BACKEND_URL}/api/user/employees/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       alert("Employee deleted");
//       navigate("/admin");
//     } catch (err) {
//       console.error(err);
//       alert("Delete failed");
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (!employee) return null;

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Employee Profile</h2>
//       <form
//         className="grid grid-cols-1 gap-4 max-w-md"
//         onSubmit={(e) => e.preventDefault()}
//       >
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           readOnly
//           placeholder="Name"
//         />
//         <input
//           type="text"
//           name="department"
//           value={formData.department}
//           readOnly={!isAdmin}
//           onChange={handleChange}
//           placeholder="Department"
//         />
//         <input
//           type="text"
//           name="position"
//           value={formData.position}
//           readOnly={!isAdmin}
//           onChange={handleChange}
//           placeholder="Position"
//         />
//         <input
//           type="text"
//           name="salary"
//           value={formData.salary}
//           readOnly={!isAdmin}
//           onChange={handleChange}
//           placeholder="Salary"
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           readOnly
//           placeholder="Email"
//         />
//         <input
//           type="text"
//           name="dateOfJoining"
//           value={new Date(formData.dateOfJoining).toLocaleDateString()}
//           readOnly
//           placeholder="Date of Joining"
//         />

//         {isAdmin && (
//           <div className="flex gap-4 mt-4">
//             <button
//               type="button"
//               onClick={handleUpdate}
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Update
//             </button>
//             <button
//               type="button"
//               onClick={handleDelete}
//               className="bg-red-500 text-white px-4 py-2 rounded"
//             >
//               Delete
//             </button>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default EmployeeDashboard;
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const EmployeeDashboard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const isAdmin = user?.role === "admin";

  const { data: employee, loading, error } = useFetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/user/employees/${id}`
  );

  const [formData, setFormData] = useState({
    name: "",
    department: "",
    position: "",
    salary: "",
    email: "",
    dateOfJoining: "",
  });

  useEffect(() => {
    if (employee) {
      setFormData({
        name: employee.name || "",
        department: employee.department || "",
        position: employee.position || "",
        salary: employee.salary || "",
        email: employee.email || "",
        dateOfJoining: employee.dateOfJoining || "",
      });
    }
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      const { name, email, dateOfJoining, ...updatableFields } = formData;

      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/employees/${id}`,
        updatableFields,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Employee updated successfully");
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this employee?")) return;
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/employees/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Employee deleted");
      navigate("/admin");
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!employee) return null;

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-center text-xl font-semibold mb-4">Employee Profile</h2>
      <form
        className="space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        {[
          { label: "Name", name: "name", readOnly: true },
          { label: "Department", name: "department", readOnly: !isAdmin },
          { label: "Position", name: "position", readOnly: !isAdmin },
          { label: "Salary", name: "salary", readOnly: !isAdmin },
          { label: "Email", name: "email", readOnly: true },
          {
            label: "Date of Joining",
            name: "dateOfJoining",
            readOnly: true,
            value: new Date(formData.dateOfJoining).toLocaleDateString(),
          },
        ].map(({ label, name, readOnly, value }) => (
          <div key={name}>
            <label className="block font-medium">{label}</label>
            <input
              type="text"
              name={name}
              value={value ?? formData[name]}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
              readOnly={readOnly}
            />
          </div>
        ))}

        {isAdmin && (
          <div className="flex gap-4 mt-4">
            <button
              type="button"
              onClick={handleUpdate}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Update
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default EmployeeDashboard;
