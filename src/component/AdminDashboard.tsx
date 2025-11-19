import React, { useEffect, useState } from "react";
import Sidebar from "./AdminSidebar";
import Navbar from "./AdminNavbar";
import RegistrationTable from "./AdminRegisteration";
import Setting from "./AdminSetting"
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

interface Registration {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  reference?: string;
  createdAt?: { seconds: number; nanoseconds: number };
}

const AdminDashboard: React.FC = () => {
  const [active, setActive] = useState("Dashboard");
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all registrations in real-time
    const unsubscribe = onSnapshot(collection(db, "registrations"), (snapshot) => {
      const docs: Registration[] = snapshot.docs.map((d) => ({
        id: d.id,
        ...(d.data() as Omit<Registration, "id">),
      }));
      setRegistrations(docs);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const totalRegistrations = registrations.length;
  const totalWithReference = registrations.filter((r) => r.reference).length;

  const renderContent = () => {
    switch (active) {
      case "Dashboard":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-[#6A0DAD] mb-4">
              Overview
            </h2>

            {loading ? (
              <p className="text-gray-500">Loading dashboard stats...</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white shadow-md p-5 rounded-xl text-center">
                  <p className="text-gray-500">Total Registrations</p>
                  <h3 className="text-3xl font-bold text-[#6A0DAD]">
                    {totalRegistrations}
                  </h3>
                </div>

                <div className="bg-white shadow-md p-5 rounded-xl text-center">
                  <p className="text-gray-500">Verified References</p>
                  <h3 className="text-3xl font-bold text-[#6A0DAD]">
                    {totalWithReference}
                  </h3>
                </div>

                <div className="bg-white shadow-md p-5 rounded-xl text-center">
                  <p className="text-gray-500">Unverified</p>
                  <h3 className="text-3xl font-bold text-[#6A0DAD]">
                    {totalRegistrations - totalWithReference}
                  </h3>
                </div>
              </div>
            )}
          </div>
        );

      case "Registrations":
        // Pass your registrations down to the table
        return <RegistrationTable registrations={registrations} loading={loading} />;

      case "Payments":
        return (
          <div className="p-6 text-gray-600">
            <h2 className="text-2xl font-bold text-[#6A0DAD] mb-3">Payments</h2>
            <p>Payment records will appear here (hook it to your Paystack data).</p>
          </div>
        );

      case "Settings":
        return (
          <Setting/>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar active={active} setActive={setActive} />

      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-y-auto">{renderContent()}</main>
      </div>
    </div>
  );
};

export default AdminDashboard;
