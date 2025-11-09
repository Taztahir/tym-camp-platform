import { ArrowRight, Facebook, Instagram, Twitter} from "lucide-react";
import Logo from "../../assets/Logo.png";

const Footer: React.FC = () => {
  return (
    <div>
      {/* Register Now Call-to-Action */}
      <div className="py-5 lg:max-w-6xl mx-auto max-lg:px-5">
        <a href="#contact">
          <button className="flex items-center justify-between duration-500 py-5 lg:py-10 px-8 bg-[#6A0DAD] rounded-full w-full font-bold text-black hover:bg-[#5b0797] transition-all">
            <span className="lg:text-[97px] text-white text-2xl md:text-4xl lg:px-20">
              Register Now
            </span>
            <span className="ml-6 flex items-center justify-center lg:w-30 lg:h-30 h-10 w-10 rounded-full bg-white">
              <ArrowRight className="lg:w-20 lg:h-20 text-[#6A0DAD]" />
            </span>
          </button>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-[#152028] relative overflow-hidden">
        <div className="relative">
          {/* Main footer content */}
          <div className="lg:flex max-lg:space-y-8 lg:max-w-6xl mx-auto lg:py-16 pt-16 pb-8 justify-between px-6 max-sm:px-5">
            {/* Brand section */}
            <div className="lg:max-w-sm space-y-6">
              <div>
                <a
                  href="#home"
                  className="text-4xl text-[#6A0DAD] font-bold hover:text-white transition-colors duration-300"
                >
                  <img src={Logo} alt="" className="h-10"/>
                </a>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Discover a fun, inspiring, and faith-driven environment for kids to learn, grow, and connect with others. Be part of something amazing this year!
              </p>

              {/* Social media */}
              <div className="flex items-center gap-4">
                <span className="text-white font-medium">Follow Us:</span>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-700 hover:bg-[#6A0DAD] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-700 hover:bg-[#6A0DAD] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-700 hover:bg-[#6A0DAD] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation sections */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  title: "Quick Links",
                  links: ["Home", "About", "How To Register", "Contact Us"],
                },
                {
                  title: "Registration",
                  links: [
                    "Fill Form",
                    "Make Payment",
                    "Receive Confirmation",
                  ],
                  href: "#howtoregister",
                },
                {
                  title: "Donate",
                  href: "#contact",
                  links: ["Make a Donation", "Sponsorship Opportunities", "Volunteer With Us", ""],
                },
              ].map((section) => (
                <div key={section.title} className="space-y-4">
                  <h3 className="font-bold text-xl text-white">{section.title}</h3>
                  <div className="space-y-3">
                    {section.links.map((link) => (
                      <a
                        key={link}
                        href={section.href}
                        className="block text-gray-300 hover:text-[#6A0DAD] transition-colors duration-300"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="border-t border-gray-700">
            <div className="max-w-6xl mx-auto px-6 py-8">
              <div className="flex justify-center items-center gap-6 flex-wrap text-gray-300">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#6A0DAD]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">42B Oworo Road, Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#6A0DAD]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm">24/7 Support: +234-906-072-0810</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#6A0DAD]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-sm">support@tymna.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 py-6 text-center">
            <div className="max-w-6xl mx-auto px-6">
              <p className="text-gray-400">
                © 2025 Tym. All rights reserved. |{" "}
                <span className="text-[#6A0DAD]">
                  Empowering Youth, Inspiring Tomorrow
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
