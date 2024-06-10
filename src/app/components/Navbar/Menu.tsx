import React from "react";

import { Menu, NavLink } from "./NavbarElements";

interface MenuProps {
  isSidebarOpen?: boolean;
}

const SidebarLinks = () => {
  return (
    <>
      <NavLink href='/products'>All Products</NavLink>
      <NavLink href='/about'>About us</NavLink>
    </>
  );
};
const NavMenu: React.FC<MenuProps> = ({ isSidebarOpen }) => {
  return (
    <Menu>
      (
      <li>
        <NavLink href='/'>home</NavLink>
      </li>
      ){isSidebarOpen ? <SidebarLinks /> : null}
    </Menu>
  );
};

export default NavMenu;
