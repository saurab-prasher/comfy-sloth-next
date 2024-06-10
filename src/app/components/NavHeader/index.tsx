"use client";
const isBrowser = typeof window !== `undefined`;
import React, { useEffect } from "react";
import Link from "next/link";
import Navbar from "../Navbar";
import logo from "../../assests/images/logo/logo.svg";
import {
  Header,
  Logo,
  Wrapper,
  HamburgerIcon,
  CloseSidebarIcon,
} from "./styles";
import { ShoppingCart, UserLogin } from "../Navbar/NavbarElements";

const Index = () => {
  return (
    <Wrapper>
      <div className='free-shipping'>
        <p>
          For a limited time, save up to 30% on home office and bedroom | COVID
          19 Update
        </p>
      </div>
      <Header>
        {/* <div className='header-container'>
          {isSidebarOpen ? (
            <CloseSidebarIcon onClick={closeSidebar} />
          ) : (
            <HamburgerIcon onClick={() => openSidebar()} />
          )}

          <div className='logo-container'>
            <Link href='/'>
              <Logo />
            </Link>
          </div>
          <Navbar isSidebarOpen={isSidebarOpen} />

          <div className='navbar-icons'>
            <Link className='cart-icon' href='/cart'>
              <span>{totalItems}</span>
              <ShoppingCart />
            </Link>

            <Link href='/login'>
              <UserLogin />
            </Link>

            {typeof window !== `undefined` ? (
              window.innerWidth > 768 ? (
                <Link className='about-link' href='/about'>
                  About Us
                </Link>
              ) : null
            ) : null}
          </div>
        </div> */}
      </Header>
    </Wrapper>
  );
};

export default Index;
