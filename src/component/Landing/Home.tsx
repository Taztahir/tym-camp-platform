import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full md:h-screen py-25 flex items-center justify-center bg-gradient-to-b from-[#e8d4f5] to-[#f5e9fb] overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-[#6A0DAD]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#6A0DAD]/10 rounded-full blur-3xl animate-pulse"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center pt-20 px-6 max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#6A0DAD] leading-snug mb-6">
          Empowering Youth, Inspiring{" "}
          <br className="max-md:hidden" />
          Tomorrow – Join the{" "}
          <span className="text-transparent bg-clip-text bg-[#6A0DAD]">
            TYM Camp
          </span>{" "}
          <br className="max-md:hidden" />
          Experience!
        </h1>

        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Discover a fun, inspiring, and faith-driven environment for kids to
          learn, grow, and connect with others. Be part of something amazing
          this year!
        </p>

        <a href="#" className="mt-4 text-sm md:text-xl md:hidden px-8 py-3 bg-[#6A0DAD] text-white font-semibold rounded-full shadow-lg border-2 border-[#6A0DAD] hover:bg-[#e8d4f5] hover:text-[#6A0DAD] hover:scale-105 transition-all duration-300 ease-in-out">
          Register Now
        </a>
        <a href="#" className="mt-4 text-sm md:text-xl max-md:hidden px-8 py-3 hover:text-white font-semibold rounded-full shadow-lg border-2 border-[#6A0DAD] hover:bg-[#6A0DAD] text-[#6A0DAD] hover:scale-105 transition-all duration-300 ease-in-out">
          Learn More
        </a>
        
      </motion.div>
    </section>
  );
};

export default Home;
