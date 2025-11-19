
export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 px-6 md:px-16 max-w-7xl mx-auto dm-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left - Contact Info */}
        <div className="space-y-8">
          {/* Address */}
          <div className="flex items-start gap-4 bg-gray-100 duration-300 hover:scale-95 transition py-10 px-10">
            <div className="w-16 h-16 flex items-center justify-center bg-[#eee5f5] rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-[#6A0DAD]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 22s8-4.5 8-12A8 8 0 004 10c0 7.5 8 12 8 12z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg">Our address:</h4>
              <p className="text-gray-600">
                2464 Royal Ln. Mesa, New Jersey 45463.
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 bg-gray-100 hover:scale-95 transition duration-300 py-10 px-10">
            <div className="w-16 h-16 flex items-center justify-center bg-[#eee5f5] rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-[#6A0DAD]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12H8m8 0l-8-5m8 5l-8 5m12-7v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg">info@logitic.com</h4>
              <p className="text-gray-600">
                Email us anytime for any kind of query.
              </p>
            </div>
          </div>

          {/* Hotline */}
          <div className="flex items-start gap-4 bg-gray-100 transition hover:scale-95 duration-300 py-10 px-10">
            <div className="w-16 h-16 flex items-center justify-center bg-[#eee5f5] rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-[#6A0DAD]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.217 3.65a1 1 0 01-.416 1.158l-2.29 1.527a11.042 11.042 0 005.516 5.516l1.527-2.29a1 1 0 011.158-.416l3.65 1.217a1 1 0 01.684.95V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg">Hot: 480–555–0103</h4>
              <p className="text-gray-600">
                Call us any kind of support, we will wait for it.
              </p>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Feel Free to Contact Us
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              required
              placeholder="Full Name*"
              className="p-4 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]"
            />
            <input
              type="email"
              placeholder="Email Address*"
              className="p-4 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]"
            />
            <input
              type="tel"
              placeholder="Phone Number*"
              className="p-4 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]"
            />
            <input
              type="text"
              required
              placeholder="Subject*"
              className="p-4 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]"
            />
            
            <textarea
              placeholder="Message*"
              className="md:col-span-2 p-4 h-32 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]"
            ></textarea>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-[#6A0DAD] text-white px-8 py-4 rounded text-lg border-2 border-[#6A0DAD] hover:bg-white hover:text-[#6A0DAD] transition"
              >
                Send Message →
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
