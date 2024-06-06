import React from "react";

import { Menu, NavLink } from "./NavbarElements";

interface MenuProps {
  isSidebarOpen?: boolean;
}

const SidebarLinks = () => {
  return (
    <>
      <NavLink to='/products'>All Products</NavLink>
      <NavLink to='/about'>About us</NavLink>
    </>
  );
};
const NavMenu: React.FC<MenuProps> = ({ isSidebarOpen }) => {
  return (
    <Menu>
      return (
      <li>
        <NavLink>home</NavLink>
      </li>
      ){isSidebarOpen ? <SidebarLinks /> : null}
    </Menu>
  );
};

export default NavMenu;
