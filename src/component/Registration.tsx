import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  reference?: string;
}

const Registration: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
  });

  const [isPaying, setIsPaying] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [paymentRef, setPaymentRef] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { fullName, email, phone } = formData;
    if (!fullName || !email || !phone) {
      alert("⚠️ Please fill in all fields before proceeding.");
      return false;
    }
    return true;
  };

  const handlePayment = () => {
    if (!validateForm()) return;

    setIsPaying(true);

    const handler = (window as any).PaystackPop.setup({
      key: "pk_test_638082473dbf1e2da54e7016eed8f25b27015613",
      email: formData.email,
      amount: 8000 * 100,
      currency: "NGN",
      ref: "REG-" + Math.floor(Math.random() * 1000000000 + 1),
      callback: (response: any) => {
        alert("✅ Payment successful! Reference: " + response.reference);
        finalizeRegistration(response.reference);
      },
      onClose: () => {
        alert("❌ Payment cancelled. Please try again.");
        setIsPaying(false);
      },
    });

    handler.openIframe();
  };

  const finalizeRegistration = async (reference: string) => {
    const newUser = { ...formData, reference };

    try {
      await addDoc(collection(db, "registrations"), {
        ...newUser,
        createdAt: serverTimestamp(),
      });

      setPaymentRef(reference);
      setIsRegistered(true);
      setIsPaying(false);
    } catch (error) {
      console.error("Error saving registration:", error);
      alert("❌ Something went wrong. Please try again.");
      setIsPaying(false);
    }
  };

  if (isRegistered) {
    return (
      <section className="py-20 flex justify-center items-center bg-gradient-to-br from-purple-100 to-white">
        <div className="bg-white shadow-xl rounded-xl p-10 text-center max-w-md w-full">
          <h2 className="text-3xl font-bold text-[#6A0DAD] mb-4">
            🎉 Registration Successful!
          </h2>
          <p className="text-gray-700 mb-6">
            Thank you,{" "}
            <span className="font-semibold">{formData.fullName}</span>!<br />
            Your payment (Ref: <b>{paymentRef}</b>) has been received.
          </p>
          <button
            className="bg-[#6A0DAD] text-white px-6 py-3 rounded-full font-semibold"
            onClick={() => {
              setFormData({ fullName: "", email: "", phone: "" });
              setPaymentRef(null);
              setIsRegistered(false);
            }}
          >
            Register Another Person
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="register"
      className="py-20 bg-[#eee5f5]"
    >
      <div className="max-w-3xl mx-auto px-5">
        <div className="bg-white shadow-lg rounded-xl p-10 w-full">
          <h2 className="text-3xl font-bold text-center text-[#6A0DAD] mb-6">
            Register Now 💜
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handlePayment();
            }}
            className="space-y-5"
          >
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]"
                placeholder="Enter your phone number"
              />
            </div>

            <button
              type="submit"
              disabled={isPaying}
              className={`w-full bg-[#6A0DAD] text-white py-3 rounded-full font-semibold transition-all duration-300 ${
                isPaying
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:shadow-lg transform hover:-translate-y-1"
              }`}
            >
              {isPaying ? "Processing Payment..." : "Proceed to Payment"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registration;
