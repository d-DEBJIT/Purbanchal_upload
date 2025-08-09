import React, { useState, useEffect } from "react";
import { ChevronDown, Phone, Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Dealer Corner",
    icon: <ChevronDown size={16} />,
  },
  {
    label: "Employee Login",
  },
  {
    label: "Our Businesses",
    icon: <ChevronDown size={16} />,
  },
  {
    label: "Contact Us",
    icon: <Phone size={16} />,
  },
];

const Topbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full text-white text-sm py-2 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-[#3366BB] border-b border-white/20" 
        : "bg-transparent border-none"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 ml-auto">
          {navItems.map(({ label, icon }) => (
            <div
              key={label}
              className="flex items-center space-x-1 cursor-pointer hover:underline"
            >
              {icon && icon}
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden px-4 sm:px-6 lg:px-8 mt-2 space-y-3 ${
          isScrolled ? "bg-[#3366BB]" : "bg-[#3366BB]/90"
        }`}>
          {navItems.map(({ label, icon }) => (
            <div
              key={label}
              className="flex items-center space-x-1 cursor-pointer hover:underline py-2"
            >
              {icon && icon}
              <span>{label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Topbar;