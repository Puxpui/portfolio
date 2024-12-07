import { div } from "framer-motion/client";
import { useState } from "react";

function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="text-black font-dcscrip sticky top-0 z-10 bg-white select-none">
      <div className="flex absolute p-[12px] bg-white rounded-full ml-2 text-[25px] font-semibold" onClick={() => scrollToSection('home')}>Puxpui</div>
      <div className="flex justify-end">
        <div className="md:hidden m-4 absolute" onClick={toggleMenu}>
          <button id="menu-toggle" className="text-black">
            <svg fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile */}
      {isMenuOpen ? (
            <div className="flex justify-end">
              <div className="md:hidden flex-col mt-[45px] ml-20 p-4 gap-8 text-[20px] font-semibold">
                <div className="relative group" onClick={() => scrollToSection('home')}>
                  <div className="relative">Home</div>
                </div>
                <div className="relative group" onClick={() => scrollToSection('about')}>
                  <div className="relative">About</div>
                </div>
                {/* กำลังพัฒนา
        <div className="relative group" onClick={() => scrollToSection('project')}>
          <div className="relative">Project</div> 
        </div> */}
                <div className="relative group" onClick={() => scrollToSection('certificate')}>
                  <div className="relative">Certificate</div>
                </div>
                <div className="relative group" onClick={() => scrollToSection('contact')}>
                  <div className="relative">Contact</div>
                </div>
              </div>
            </div>
      ) : null}

            <div className="hidden md:flex justify-end p-4 gap-8 text-[20px] font-semibold">
              <div className="relative group" onClick={() => scrollToSection('home')}>
                <div className="relative">Home</div>
                <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#00B7FF] rounded-full transition-all duration-300 group-hover:w-full"></div>
              </div>
              <div className="relative group" onClick={() => scrollToSection('about')}>
                <div className="relative">About</div>
                <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#00B7FF] rounded-full transition-all duration-300 group-hover:w-full"></div>
              </div>
              {/* กำลังพัฒนา
        <div className="relative group" onClick={() => scrollToSection('project')}>
          <div className="relative">Project</div> 
          <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#00B7FF] rounded-full transition-all duration-300 group-hover:w-full"></div>
        </div> */}
              <div className="relative group" onClick={() => scrollToSection('certificate')}>
                <div className="relative">Certificate</div>
                <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#00B7FF] rounded-full transition-all duration-300 group-hover:w-full"></div>
              </div>
              <div className="relative group" onClick={() => scrollToSection('contact')}>
                <div className="relative">Contact</div>
                <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#00B7FF] rounded-full transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>
          </div>
          );
}

          export default MyNavbar;
