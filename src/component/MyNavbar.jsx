function MyNavbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="text-black font-dcscrip sticky top-0 z-10 bg-white select-none">
      <div className="flex absolute p-[12px] ml-2 text-[25px] font-semibold" onClick={() => scrollToSection('home')}>Puxpui</div>
      <div className="flex justify-end p-4 gap-8 text-[20px] font-semibold">
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
