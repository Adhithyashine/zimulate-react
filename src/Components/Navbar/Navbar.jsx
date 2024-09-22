import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-[#4b0082] p-3 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Zimulate Consultech</h1>
          
          {/* Hamburger Icon for mobile */}
          <div className="block md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {/* Hamburger icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:flex">
            <a href="#home" className="text-white text-xl font-semibold px-5">
              Home
            </a>
            <a href="#about" className="text-white text-xl font-semibold px-5">
              About
            </a>
            <a href="#services" className="text-white text-xl font-semibold px-5">
              Services
            </a>
            <a href="#contact" className="text-white text-xl font-semibold px-5">
              Contact
            </a>
          </div>
        </div>

        {/* Mobile menu, shown when the hamburger is clicked */}
        {isOpen && (
          <div className="md:hidden px-4">
            <a href="#home" className="block text-white text-xl font-semibold py-2">
              Home
            </a>
            <a href="#about" className="block text-white text-xl font-semibold py-2">
              About
            </a>
            <a href="#services" className="block text-white text-xl font-semibold py-2">
              Services
            </a>
            <a href="#contact" className="block text-white text-xl font-semibold py-2">
              Contact
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
