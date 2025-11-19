import React, { useEffect, useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { Search, Trash2 } from "lucide-react";

interface Registration {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  reference?: string;
  createdAt?: { seconds: number; nanoseconds: number };
}

interface Props {
  registrations: Registration[];
  loading: boolean;
}

const RegistrationTable: React.FC<Props> = ({ registrations, loading }) => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<Registration[]>(registrations);

  useEffect(() => {
    const lower = search.toLowerCase();
    setFiltered(
      registrations.filter(
        (r) =>
          r.fullName.toLowerCase().includes(lower) ||
          r.email.toLowerCase().includes(lower) ||
          (r.reference?.toLowerCase().includes(lower) ?? false)
      )
    );
  }, [search, registrations]);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this registration?")) {
      try {
        await deleteDoc(doc(db, "registrations", id));
        alert("✅ Registration deleted successfully.");
      } catch (err) {
        alert("❌ Error deleting registration: " + (err as Error).message);
      }
    }
  };

  if (loading) {
    return <p className="text-center mt-10 text-gray-600">Loading registrations...</p>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-[#6A0DAD] text-center">
        🧾 All Registrations
      </h2>

      {/* Search bar */}
      <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 mb-6 shadow-sm">
        <Search className="text-gray-500" size={20} />
        <input
          type="text"
          placeholder="Search by name, email, or reference..."
          className="flex-1 bg-transparent outline-none text-gray-700"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">No registrations found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border rounded-lg shadow-lg bg-white">
            <thead className="bg-gradient-to-r from-[#6A0DAD] to-purple-600 text-white">
              <tr>
                <th className="p-3 text-left">#</th>
                <th className="p-3 text-left">Full Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Reference</th>
                <th className="p-3 text-left">Registered On</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r, i) => (
                <tr
                  key={r.id}
                  className="border-t hover:bg-purple-50 transition-all duration-200"
                >
                  <td className="p-3 font-medium text-gray-700">{i + 1}</td>
                  <td className="p-3 text-gray-800">{r.fullName}</td>
                  <td className="p-3 text-gray-700">{r.email}</td>
                  <td className="p-3 text-gray-700">{r.phone}</td>
                  <td className="p-3 text-green-700 font-semibold">
                    {r.reference || "—"}
                  </td>
                  <td className="p-3 text-sm text-gray-500">
                    {r.createdAt
                      ? new Date(r.createdAt.seconds * 1000).toLocaleString()
                      : "—"}
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleDelete(r.id)}
                      className="bg-red-500 text-white px-3 py-1.5 rounded-lg flex items-center gap-1 mx-auto hover:bg-red-600 transition"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RegistrationTable;
