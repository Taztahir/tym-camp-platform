import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Fill Out the Registration Form",
    description:
      "Start by completing the camp registration form with your details such as name, school, and contact information.",
    icon: "📝",
  },
  {
    number: "02",
    title: "Make Your Payment",
    description:
      "After submitting your form, proceed to make your camp fee payment securely through Paystack or other available options.",
    icon: "💳",
  },
  {
    number: "03",
    title: "Receive Confirmation",
    description:
      "Once your payment is confirmed, you’ll get your camp registration ID and details. Get ready for an exciting TYM Camp experience!",
    icon: "🎉",
  },
];

const HowToRegister = () => {
  return (
    <section
      id="howtoregister"
      className="py-24 bg-[#eee5f5] relative overflow-hidden"
    >
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-red-100 to-pink-100 rounded-full opacity-20 -translate-y-48"
        animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.25, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-[#e8d4f5] text-[#6A0DAD] rounded-full text-sm font-medium">
            🌿 How to Register
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Simple Steps to
            <span className="text-transparent bg-clip-text bg-[#6A0DAD]">
              {" "}
              Join TYM Camp
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Registering for TYM Camp is simple and quick. Follow these three
            easy steps to become part of this year’s amazing camp!
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative text-center group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-red-200 to-pink-200 transform translate-x-1/2 z-0"></div>
              )}

              <div className="relative z-10">
                <motion.div
                  className="w-32 h-32 mx-auto mb-6 bg-[#e8d4f5] rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  whileHover={{ rotate: [0, 5, -5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-4xl">{step.icon}</div>
                </motion.div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#6A0DAD] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToRegister;
