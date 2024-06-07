import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className={({ isActive }) => isActive ? "text-black-600 text-4xl font-bold" : "text-blue-600 text-4xl font-bold" }>
      Vijay
        {/* <img src={logo} alt='logo' className='w-18 h-18 object-contain' /> */}
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
      <NavLink to='/' className={({ isActive }) => isActive ? "text-black-600" : "text-blue-600" }>
          Home
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
