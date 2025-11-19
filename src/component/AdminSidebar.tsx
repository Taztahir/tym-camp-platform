import React from "react";
import { LayoutDashboard, Users, CreditCard, Settings } from "lucide-react";

interface SidebarProps {
  active: string;
  setActive: (value: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ active, setActive }) => {
  const links = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Registrations", icon: <Users size={20} /> },
    { name: "Payments", icon: <CreditCard size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="bg-[#6A0DAD] text-white w-64 p-5 flex flex-col">
      <h1 className="text-2xl font-extrabold mb-8 text-center">Admin Panel</h1>

      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => setActive(link.name)}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
              active === link.name
                ? "bg-white text-[#6A0DAD] font-semibold"
                : "hover:bg-purple-700"
            }`}
          >
            {link.icon}
            {link.name}
          </button>
        ))}
      </nav>

      <div className="mt-auto text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Taz Admin
      </div>
    </div>
  );
};

export default Sidebar;
