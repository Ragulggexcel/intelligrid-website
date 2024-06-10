import React, { useEffect, useState } from 'react';
import intelligrid from "../../assets/intelligrid.jpg"

const Header = () => {
   useEffect(() => {
      const navbarMenu = document.getElementById("menu");
      const burgerMenu = document.getElementById("burger");
      const headerMenu = document.getElementById("header");
      const toggleMenu = () => {
         burgerMenu.classList.toggle("is-active");
         navbarMenu.classList.toggle("is-active");
      };

      if (burgerMenu && navbarMenu) {
         burgerMenu.addEventListener("click", toggleMenu);
      }
      const closeMenu = () => {
         burgerMenu.classList.remove("is-active");
         navbarMenu.classList.remove("is-active");
      };

      document.querySelectorAll(".menu-link").forEach((link) => {
         link.addEventListener("click", closeMenu);
      });

      const handleScroll = () => {
         if (window.scrollY >= 85) {
            headerMenu.classList.add("on-scroll");
         } else {
            headerMenu.classList.remove("on-scroll");
         }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         if (burgerMenu && navbarMenu) {
            burgerMenu.removeEventListener("click", toggleMenu);
         }
         document.querySelectorAll(".menu-link").forEach((link) => {
            link.removeEventListener("click", closeMenu);
         });
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <header className="header" id="header">
         <nav id="navbar-example2" className="navbar container navbar-light bg-light">
            <div  href="#" className="brand navbar-brand">
            <img href="/" src={intelligrid}/>
            </div>
           
            <div className="burger" id="burger">
               <span className="burger-line"></span>
               <span className="burger-line"></span>
               <span className="burger-line"></span>
            </div>
            <div className="menu" id="menu">
               <ul className="menu-inner nav nav-pills">
                  <li className="menu-item nav-item"><a  href="#home" className="menu-link nav-link active">Home</a></li>
                  <li className="menu-item"><a    href="#about-us" className="menu-link nav-link">About us</a></li>
                  <li className="menu-item"><a    href="#services" className="menu-link nav-link">Services</a></li>
                  <li className="menu-item"><a   href="#contact" className="menu-link nav-link">Contact</a></li>
               </ul>
            </div>
         </nav>
      </header>
   );
};

export default Header;
