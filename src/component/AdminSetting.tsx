import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

interface SettingsData {
  appName: string;
  contactEmail: string;
  primaryColor: string;
  darkMode: boolean;
}

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<SettingsData>({
    appName: "",
    contactEmail: "",
    primaryColor: "#6A0DAD",
    darkMode: false,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Load settings from Firestore
  useEffect(() => {
    const fetchSettings = async () => {
      const ref = doc(db, "settings", "general");
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setSettings(snap.data() as SettingsData);
      }
      setLoading(false);
    };
    fetchSettings();
  }, []);

  // Save settings to Firestore
  const handleSave = async () => {
    setSaving(true);
    try {
      const ref = doc(db, "settings", "general");
      await setDoc(ref, settings);
      alert("✅ Settings saved successfully!");
    } catch (err) {
      alert("❌ Failed to save settings: " + (err as Error).message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p className="text-center text-gray-600 mt-10">Loading settings...</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-[#6A0DAD] mb-6">⚙️ Dashboard Settings</h2>

      <div className="space-y-5 bg-white p-6 shadow-md rounded-xl">
        {/* App Name */}
        <div>
          <label className="block font-semibold mb-1">App Name</label>
          <input
            type="text"
            value={settings.appName}
            onChange={(e) => setSettings({ ...settings, appName: e.target.value })}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-[#6A0DAD] outline-none"
            placeholder="Enter dashboard name"
          />
        </div>

        {/* Contact Email */}
        <div>
          <label className="block font-semibold mb-1">Contact Email</label>
          <input
            type="email"
            value={settings.contactEmail}
            onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-[#6A0DAD] outline-none"
            placeholder="support@example.com"
          />
        </div>

        {/* Primary Color */}
        <div>
          <label className="block font-semibold mb-1">Primary Theme Color</label>
          <input
            type="color"
            value={settings.primaryColor}
            onChange={(e) => setSettings({ ...settings, primaryColor: e.target.value })}
            className="w-16 h-10 cursor-pointer border rounded"
          />
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={settings.darkMode}
            onChange={(e) => setSettings({ ...settings, darkMode: e.target.checked })}
            className="w-5 h-5 accent-[#6A0DAD]"
          />
          <span className="text-gray-700 font-medium">Enable Dark Mode</span>
        </div>

        {/* Save Button */}
        <div className="pt-4">
          <button
            onClick={handleSave}
            disabled={saving}
            className={`w-full bg-[#6A0DAD] text-white font-semibold py-2 rounded-lg transition-all duration-300 hover:bg-purple-800 ${
              saving ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {saving ? "Saving..." : "Save Settings"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
