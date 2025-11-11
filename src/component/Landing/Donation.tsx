import React, { useState } from "react";

const Donation: React.FC = () => {
  const [amount, setAmount] = useState<number | string>("");

  const presetAmounts = [1000, 5000, 10000, 20000];

  const handleDonate = () => {
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    const handler = (window as any).PaystackPop.setup({
      key: "pk_test_638082473dbf1e2da54e7016eed8f25b27015613", // replace with your public key
      email: "donor@example.com",
      amount: Number(amount) * 100, // Paystack uses kobo
      currency: "NGN",
      ref: "" + Math.floor(Math.random() * 1000000000 + 1),
      callback: function (response: any) {
        alert("Donation successful! Reference: " + response.reference);
      },
      onClose: function () {
        alert("Transaction was not completed, window closed.");
      },
    });

    handler.openIframe();
  };

  return (
    <section
      id="donate"
      className="py-20 bg-gradient-to-br from-purple-100 to-white flex justify-center items-center"
    >
      <div className="max-w-2xl w-full mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-[#6A0DAD] mb-4">
          Support Our Mission 💜
        </h2>
        <p className="text-gray-600 mb-8">
          Your contribution helps us continue our programs and reach more people.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {presetAmounts.map((amt) => (
            <button
              key={amt}
              onClick={() => setAmount(amt)}
              className={`px-6 py-3 rounded-full font-semibold border transition-all duration-300 ${
                amount === amt
                  ? "bg-[#6A0DAD] text-white border-[#6A0DAD]"
                  : "border-gray-300 text-gray-700 hover:bg-purple-50"
              }`}
            >
              ₦{amt.toLocaleString()}
            </button>
          ))}
        </div>

        <div className="mb-6">
          <input
            type="number"
            placeholder="Enter custom amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]"
          />
        </div>

        <button
          onClick={handleDonate}
          className="bg-[#6A0DAD] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
        >
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default Donation;
