import { useState } from 'react';
import Logo from '@/assets/logo.png';
import Link from '@/Components/Link';
import { SelectedPage } from '@/Shared/type';


type Props = {
  selectedPage : SelectedPage;
  setSelectedPage : (value : SelectedPage) => void;
  
};

const NavBar = ({selectedPage,setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <nav className={`${flexBetween} py-2 w-full fixed z-30 bg-white shadow`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          {/* Left side */}
          <img alt="logo" src={Logo} className="h-6" />

          {/* Right side */}
          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8`}>
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            <div className={`${flexBetween} gap-8`}>
              <p className="cursor-pointer hover:text-primary-500">Sign In</p>
              <button className="rounded-md bg-primary-500 px-4 py-2 text-white hover:bg-primary-300 transition duration-300">
                Become a Member
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
