import { motion } from "framer-motion";
import AboutImage from "../../assets/Tym-about.jpeg";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto flex max-lg:flex-col items-center lg:px-6 lg:gap-20">
        
        {/* Left Image */}
        <motion.div
          className="flex-1 justify-center max-md:px-5 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <motion.img
              src={AboutImage}
              alt="About TYM Camp"
              className="relative w-full md:max-w-lg rounded-2xl shadow-xl transform hover:scale-101 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex-1 space-y-8 max-lg:py-10 mx-2 md:mx-10 lg:mx-10 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-[#e8d4f5] text-[#6A0DAD] rounded-full text-sm font-medium mb-4"
          >
            🌙 About TYM
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Building Tomorrow’s Leaders
            <span className="text-transparent bg-clip-text bg-[#6A0DAD]">
              {" "}
              through Faith and Fun
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            <span className="font-semibold text-[#6A0DAD]">The Young Muslims (TYM)</span> is a vibrant platform where Muslim
            children and teenagers grow spiritually, intellectually, and socially.
            We believe in nurturing the next generation with strong Islamic values,
            leadership skills, and a spirit of unity — all while having fun!
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              "Islamic learning made engaging",
              "Fun activities and moral guidance",
              "Creating confident, God-fearing youth",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center md:justify-start gap-3"
              >
                <div className="w-8 h-8 bg-[#e8d4f5] rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#6A0DAD]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#6A0DAD] rounded-2xl p-6 text-white shadow-xl mt-8"
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">5K+</h3>
                <p className="text-sm opacity-90">Camp Participants</p>
              </div>
              <div className="space-y-2 border-l border-r border-white/20">
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="text-sm opacity-90">States Involved</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">100%</h3>
                <p className="text-sm opacity-90">Positive Impact</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
