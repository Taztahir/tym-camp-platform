import React, { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";

interface Registration {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  reference?: string;
  createdAt?: { seconds: number; nanoseconds: number };
}

const AdminDashboard: React.FC = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let q;

    try {
      // Try to order by createdAt if it exists
      q = query(collection(db, "registrations"), orderBy("createdAt", "desc"));
    } catch (err) {
      console.warn("⚠️ Could not order by createdAt. Falling back to unordered query.");
      q = query(collection(db, "registrations"));
    }

    const unsubscribe = onSnapshot(
  q,
  (snapshot) => {
    const docs: Registration[] = snapshot.docs.map((d) => {
      const data = d.data() as Omit<Registration, "id">; // type assertion
      return {
        id: d.id,
        ...data,
      };
    });

    console.log("📦 Firestore snapshot:", docs);
    setRegistrations(docs);
    setLoading(false);
  },
  (error) => {
    console.error("❌ Firestore snapshot error:", error);
    setLoading(false);
  }
);


    return () => unsubscribe();
  }, []);

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
    <div className="p-5 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#6A0DAD]">
        🧾 Admin Dashboard
      </h2>

      {registrations.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No registrations found yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-[#6A0DAD] text-white">
              <tr>
                <th className="p-3 border">#</th>
                <th className="p-3 border">Full Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Phone</th>
                <th className="p-3 border">Reference</th>
                <th className="p-3 border">Registered On</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((r, index) => (
                <tr key={r.id} className="text-center bg-gray-50 border-t hover:bg-gray-100">
                  <td className="p-2 font-semibold">{index + 1}</td>
                  <td className="p-2">{r.fullName}</td>
                  <td className="p-2">{r.email}</td>
                  <td className="p-2">{r.phone}</td>
                  <td className="p-2 text-green-700 font-medium">{r.reference}</td>
                  <td className="p-2 text-sm text-gray-600">
                    {r.createdAt
                      ? new Date(r.createdAt.seconds * 1000).toLocaleString()
                      : "—"}
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => handleDelete(r.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-all"
                    >
                      Delete
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

export default AdminDashboard;
