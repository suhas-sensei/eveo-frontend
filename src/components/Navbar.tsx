import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/library' },
    { name: 'About us', href: '/leaderboard' },
    { name: 'Roadmap', href: '/sessions' },
    { name: 'Tutorial', href: '/participation' },
    { name: 'Reach out', href: '/location' },
    { name: 'Github', href: '/about' }
  ];

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo and primary nav items */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
                <span className="text-black text-3xl font-bold">EVEO</span>
                <div className="hidden md:ml-100 md:flex md:space-x-12">
                {navItems.map((item) => (
                  <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:bg-purple-100 px-3 py-2 rounded-[2rem] text-[1rem] font-medium"
                  >
                  {item.name}
                  </a>
                ))}
                </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-[2rem] text-white hover:bg-purple-700 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      
    </nav>
  );
};

export default Navbar;