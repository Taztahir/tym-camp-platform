import React from "react";
import { Bell, UserCircle2 } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <div className="w-full bg-white shadow flex justify-between items-center px-6 py-3">
      <h2 className="text-xl font-semibold text-gray-700">Welcome, Admin 👋</h2>
      <div className="flex items-center gap-4">
        <Bell className="text-gray-500 hover:text-[#6A0DAD] cursor-pointer" />
        <UserCircle2 className="text-gray-500 hover:text-[#6A0DAD] cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
