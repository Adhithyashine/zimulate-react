import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
    setIsOpen(false); // Close mobile menu after selecting
  };

  return (
    <div>
      <nav className="bg-[#4b0082] p-3 fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Zimulate Consultech</h1>
          
          {/* Hamburger Icon for mobile */}
          <div className="block md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-white focus:outline-none" 
              aria-expanded={isOpen}
            >
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
            {['home', 'about', 'services', 'contact'].map((page) => (
              <a
                key={page}
                href={`#${page}`}
                className={`text-xl font-semibold px-5 hover:text-gray-300 transition 
                  ${activePage === page ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg' : 'text-white'}`}
                onClick={() => handlePageChange(page)}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu, shown when the hamburger is clicked */}
        {isOpen && (
          <div className="md:hidden px-4 bg-[#4b0082] transition duration-300 ease-in-out">
            {['home', 'about', 'services', 'contact'].map((page) => (
              <a
                key={page}
                href={`#${page}`}
                className={`block text-xl font-semibold py-2 hover:text-gray-300 transition 
                  ${activePage === page ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg' : 'text-white'}`}
                onClick={() => handlePageChange(page)}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
