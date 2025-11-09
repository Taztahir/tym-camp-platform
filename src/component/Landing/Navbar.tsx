import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/Logo.png";

interface NavItem {
  id: string;
  label: string;
}

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections: NodeListOf<HTMLElement> = document.querySelectorAll("section");
      let current: string = "home";

      sections.forEach((section) => {
        const sectionTop: number = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id") || "home";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "howtoregister", label: "How to Register" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="lg:max-w-6xl max-md:px-6 lg:px-6 max-lg:max-w-2xl mx-auto py-5 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="text-4xl text-[#6A0DAD] font-bold hover:scale-105 transition-transform duration-300"
        >
          <img src={Logo} alt="Logo" className="h-10" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-5">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`transition-colors px-3 py-2 rounded-md font-semibold ${
                  activeSection === item.id
                    ? "text-[#6A0DAD] bg-[#dfc4f2]"
                    : "text-[#1F2937]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Get Started Button (desktop only) */}
        <div className="hidden lg:block">
          <a
            href="#"
            className="bg-[#6A0DAD] text-white px-7 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Register Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md h-screen">
          <ul className="flex flex-col space-y-2 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block transition-colors px-3 py-2 rounded-sm font-semibold ${
                    activeSection === item.id
                      ? "text-[#6A0DAD] bg-[#e8d4f5]"
                      : "text-[#1F2937]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-[#6A0DAD] text-white px-7 py-3 rounded-xl font-semibold"
              >
                Register Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
