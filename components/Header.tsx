/**
 * Header Component
 *
 * Main navigation header that appears on all pages with:
 * - Top bar with contact information (phone, email) and social links
 * - Logo linking to home page
 * - Desktop navigation menu
 * - Mobile hamburger menu trigger
 * - Slide-out mobile navigation panel
 *
 * Uses fixed positioning to stay visible while scrolling
 */
"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useCursor } from "@/context/CursorContext";
// components
import MobileNav from "./Nav/MobileNav";
import Nav from "./Nav/Nav";
import Socials from "./Socials";

const Header = () => {
  // Get cursor handlers for interactive hover effects
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();
  // State to control mobile navigation visibility
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
      <header className="pb-6 xl:pb-[50px] fixed z-40 w-full bg-accent-100 xl:bg-transparent">
        {/* top-bar */}
        <div className="bg-secondary-100 mb-6 xl:mb-[50px] xl:h-[50px] py-4 xl:py-0">
          <div className="container mx-auto h-full">
            <div className="flex items-center justify-between h-full">
              {/* address & phone */}
              <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="flex flex-col lg:flex-row items-center h-full gap-2 xl:gap-6 w-full justify-between xl:w-auto xl:justify-normal"
              >
                {/* address */}
                <div className="flex items-center gap-2 text-white text-sm">
                  <FaMapMarkerAlt className="text-white shrink-0" />
                  <span>כיכר ז&apos;בוטינסקי 1, דימונה</span>
                </div>
                {/* phone */}
                <a
                  href="tel:0536100932"
                  className="flex items-center gap-2 text-white text-sm hover:underline"
                  dir="ltr"
                >
                  <FaPhoneAlt className="text-white shrink-0" />
                  <span>053-6100932</span>
                </a>
              </motion.div>
              {/* socials & quick CTA */}
              <div className="hidden xl:flex items-center gap-6">
                <motion.div
                  onMouseEnter={mouseEnterHandler}
                  onMouseLeave={mouseLeaveHandler}
                >
                  <Socials containerStyle="flex gap-4 text-white" />
                </motion.div>
                <a
                  href="https://wa.me/972536100932"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-[#e48373] text-white text-xs font-semibold px-4 py-1.5 rounded-full transition-colors shadow-sm"
                >
                  קבעי תור בוואטסאפ
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main header section with logo and navigation */}
        <div className="container mx-auto flex items-center justify-between px-6">
          {/* logo */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="flex flex-col text-start">
                <span className="text-2xl xl:text-3xl font-bold font-primary tracking-widest text-primary">
                  PHOENIX
                </span>
                <span className="text-[12px] font-semibold text-accent -mt-1 tracking-normal">
                  פניקס • קליניקה לאסתטיקה וקוסמטיקה
                </span>
              </div>
            </Link>
          </motion.div>
          {/* mobile nav trigger */}
          <div
            className="xl:hidden cursor-pointer"
            onClick={() => setMobileNav(!mobileNav)}
            aria-label="פתח תפריט"
          >
            <AiOutlineMenu className="text-3xl text-primary" />
          </div>
          {/* desktop nav */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="hidden xl:block"
          >
            <Nav />
          </motion.div>
        </div>
      </header>

      {/* mobile nav */}
      <motion.div
        initial={{ right: "-100%" }}
        animate={{ right: mobileNav ? 0 : "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed bg-primary top-0 bottom-0 right-0 w-[300px] xl:hidden z-50 shadow-2xl"
      >
        <MobileNav setMobileNav={setMobileNav} />
      </motion.div>
    </>
  );
};

export default Header;
