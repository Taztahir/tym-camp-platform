import React, { useEffect, useState } from "react";

const ImageModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // Show modal after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Background Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-white hover:text-gray-700 text-3xl"
            >
              &times;
            </button>
          {/* Modal Content */}
          <div className="bg-white rounded-2xl shadow-lg p-6 relative w-11/12 max-w-md">
            

            <h2 className="text-xl font-semibold text-center mb-4 text-blue-600">
              Special Offer 🎉
            </h2>

            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1602524201267-6b8a8b5a2263?auto=format&fit=crop&w=600&q=80"
              alt="Promo"
              className="rounded-xl w-full object-cover"
            />

            <p className="text-center text-gray-600 mt-4">
              Don’t miss this offer — click below to learn more!
            </p>

            <div className="text-center mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;
